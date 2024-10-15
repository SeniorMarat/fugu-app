<script setup lang="ts">
import Fugu from "~/components/game/fugu.vue"
import gameScore from "~/components/game/game-score.vue"
import Obstacles from "~/components/game/obstacles.vue"

definePageMeta({
  layout: "game",
})

interface obstacles {
  pipeX: number
  pipeHeight: number
  pipeGap: number
  pipeWidth: number
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
    if (Math.abs(obstacles_ref.value.pipeX - fugu_ref.value.x) < obstacles_ref.value.pipeWidth / 2) {
      if (
        fugu_ref.value.y < obstacles_ref.value.pipeHeight
        || fugu_ref.value.y > obstacles_ref.value.pipeHeight + obstacles_ref.value.pipeGap
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

watch(is_colliding, () => {
  if (is_colliding.value) {
    score.value = 0
  }
})
</script>

<template lang="pug">
gameScore(:score="score" style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%);")
obstacles(ref="obstacles_ref")
fugu(ref="fugu_ref")
h5(style="color: #fff; font-size: 50px;font-family: 'Jua', sans-serif; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)") {{ is_colliding }}
</template>

<style module lang="scss">
body {
  overflow: hidden;
}
</style>
