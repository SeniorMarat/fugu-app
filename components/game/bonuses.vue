<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"

const props = defineProps<{ isPaused: boolean }>()

const emit = defineEmits(["bonusCollected"])

const bonus_index = defineModel<number>("bonus_index", { required: true })

const { width, height } = useWindowSize()
const bonus_speed = 2.5

interface bonus {
  y: number
  height: number
  width: number
  type: "left" | "right"
  image: string
}
const coin = ref<bonus>({ y: -200, height: 50, width: 50, type: "left", image: "coin.svg" })

const bonuses = ref([coin])
let was_paused = false

watch(bonus_index, (new_index) => {
  if (new_index !== -1) {
    bonuses.value.splice(new_index, 1)
    emit("bonusCollected")
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
  const bonuses = [coin]
  const randomIndex = Math.floor(Math.random() * bonuses.length)
  const bonus = ref<bonus>({ ...bonuses[randomIndex].value })
  bonus.value.type = Math.random() > 0.5 ? "left" : "right"
  return bonus
}

function get_bonus_path(name: string) {
  return new URL(`/public/bonuses/${name}`, import.meta.url).href
}

const hitboxes = computed(() => {
  return bonuses.value.map((bonus) => {
    return {
      x: bonus.value.type === "right" ? width.value - 10 : 10,
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
    .left(v-if="bonus.value.type === 'left'" :style="{ height: `${bonus.value.height}px`, left: `10vw`, width: `${bonus.value.width}px`, top: `${bonus.value.y}px` }")
      img(:src="get_bonus_path(bonus.value.image)" :style="{ width: `100%` }")
    .right(v-if="bonus.value.type === 'right'" :style="{ height: `${bonus.value.height}px`, right: `10vw`, width: `${bonus.value.width}px`, top: `${bonus.value.y}px` }")
      img(:src="get_bonus_path(bonus.value.image)" :style="{ width: `100%` }")
</template>

<style module lang="scss">
  .bonus-container {
  min-width: 100%;
  height: 100vh;
}

.left {
  position: absolute;
}

.right {
  position: absolute;
}
</style>
