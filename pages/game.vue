<script setup lang="ts">
import Fugu from "~/components/game/fugu.vue"
import gameScore from "~/components/game/game-score.vue"
import Obstacles from "~/components/game/obstacles.vue"

definePageMeta({
  layout: "game",
})

interface obstacles {
  hitboxes: [
    {
      x: number
      y: number
      height: number
      width: number
    },
  ]
}

interface fugu {
  x: number
  y: number
  size: number
}
const score = ref(0)

const obstacles_ref = ref<obstacles>()
const fugu_ref = ref<fugu>()
const is_colliding = computed(() => {
  if (obstacles_ref.value && fugu_ref.value) {
    const hitboxes = obstacles_ref.value.hitboxes
    for (const hitbox of hitboxes) {
      if (
        Math.abs(hitbox.x - fugu_ref.value.x) < (fugu_ref.value.size + hitbox.width) / 2
        && fugu_ref.value.y + fugu_ref.value.size / 2 > hitbox.y
        && fugu_ref.value.y + fugu_ref.value.size / 2 < hitbox.y + hitbox.height
      ) {
        return true
      }
    }
  }
  return false
})

onMounted(() => {
  setInterval(() => {
    score.value++
  }, 2500)
})

const max_score = ref(0)

watch(is_colliding, () => {
  if (is_colliding.value) {
    max_score.value = Math.max(max_score.value, score.value)
    score.value = 0
  }
})
</script>

<template lang="pug">
gameScore(:score="score" style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%);")
obstacles(ref="obstacles_ref")
fugu(ref="fugu_ref")
h5(style="color: #fff; font-size: 50px;font-family: 'Jua', sans-serif; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)") {{ max_score }}
</template>

<style module lang="scss">
body {
  overflow: hidden;
}
</style>
