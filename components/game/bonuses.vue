<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"

const props = defineProps<{ isPaused: boolean }>()

const emit = defineEmits(["coinCollected", "bombCollected"])

const bonus_index = defineModel<number>("bonus_index", { required: true })

const { width, height } = useWindowSize()
const bonus_speed = 2.5

interface bonus {
  y: number
  height: number
  width: number
  x: number
  type: "coin" | "bomb"
  image: string
}
const coin = ref<bonus>({ y: -200, height: 50, width: 50, x: 10 + 50 / 2, type: "coin", image: "coin.svg" })
const bomb = ref<bonus>({ y: -200, height: 50, width: 50, x: width.value / 2 - 50 / 2, type: "bomb", image: "bomb.svg" })

const bonuses = ref([coin])
let was_paused = false

watch(bonus_index, (new_index) => {
  if (new_index !== -1) {
    if (bonuses.value[new_index].value.type === "coin") {
      bonuses.value.splice(new_index, 1)
      emit("coinCollected")
    } else if (bonuses.value[new_index].value.type === "bomb") {
      emit("bombCollected")
    }
  }
})

onMounted(() => {
  setInterval(() => {
    if (!props.isPaused) {
      if (was_paused) {
        bonuses.value = []
        was_paused = false
      }
      for (let i = bonuses.value.length - 1; i >= 0; i--) {
        bonuses.value[i].value.y += bonus_speed
        if (bonuses.value[i].value.y > height.value + bonuses.value[i].value.height) {
          bonuses.value.splice(i, 1)
        }
      }
    } else {
      was_paused = true
    }
  }, 16)
  setInterval(() => {
    if (!props.isPaused) {
      const newbonus = get_random_bonus()
      newbonus.value.y = -200
      bonuses.value.push(newbonus)
    }
  }, 1750)
})

function get_random_bonus() {
  const bonuses = [coin, bomb]
  const randomIndex = Math.floor(Math.random() * bonuses.length)
  const bonus = ref<bonus>({ ...bonuses[randomIndex].value })
  if (bonus.value.type === "coin") {
    bonus.value.x = Math.random() > 0.5 ? width.value - (width.value * 0.15) - bonus.value.width / 2 : 10 + bonus.value.width / 2
  }
  return bonus
}

function get_bonus_path(name: string) {
  return new URL(`/public/bonuses/${name}`, import.meta.url).href
}

const hitboxes = computed(() => {
  return bonuses.value.map((bonus) => {
    return {
      x: bonus.value.x > 100 ? bonus.value.x + bonus.value.width : bonus.value.x,
      y: bonus.value.y,
      height: bonus.value.height,
      width: bonus.value.width,
    }
  })
})

defineExpose({ hitboxes })
</script>

<template lang="pug">
.bonus-container
  .bonus(v-for="(bonus, index) in bonuses" :key="index")
    .coin(v-if="bonus.value.type === 'coin'" :style="{ height: `${bonus.value.height}px`, left: `${bonus.value.x}px`, width: `${bonus.value.width}px`, top: `${bonus.value.y}px` }")
      img(:src="get_bonus_path(bonus.value.image)" :style="{ width: `100%` }")
    .bomb(v-if="bonus.value.type === 'bomb'" :style="{ height: `${bonus.value.height}px`, left: `${bonus.value.x}px`, width: `${bonus.value.width}px`, top: `${bonus.value.y}px` }")
      img(:src="get_bonus_path(bonus.value.image)" :style="{ width: `100%` }")
</template>

<style module lang="scss">
  .bonus-container {
  min-width: 100%;
  height: 100vh;
}

.coin {
  position: absolute;
}

.bomb {
  position: absolute;
}
</style>
