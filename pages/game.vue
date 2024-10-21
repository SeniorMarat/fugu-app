<script setup lang="ts">
import { OButton, OModal } from "@oruga-ui/oruga-next"

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

const is_game_paused = ref(false)
const show_modal = ref(false)

watch(is_colliding, (new_value) => {
  if (new_value) {
    is_game_paused.value = true
    show_modal.value = true
  }
})

onMounted(() => {
  setInterval(() => {
    if (!is_game_paused.value) {
      score.value++
    }
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
.page
  gameScore(:score="score")
  obstacles(ref="obstacles_ref" :is-paused="is_game_paused")
  fugu(ref="fugu_ref" :is-paused="is_game_paused")
  h5(style="color: #fff; font-size: 50px;font-family: 'Jua', sans-serif; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)") {{ max_score }}
  o-modal.modal(v-model:active="show_modal")
    pad(style="width: 250px")
      p(style="text-align: center;")
        o-button(@click="() => { show_modal = false; is_game_paused = false }") OK
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 100%;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}
</style>
