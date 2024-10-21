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
        Math.abs(hitbox.x - fugu_ref.value.x - fugu_ref.value.size / 2) < (fugu_ref.value.size + hitbox.width) / 2
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

function open_link() {
  window.open("https://rickroll.it/rickroll.mp4", "_blank")
}
</script>

<template lang="pug">
.page
  gameScore(:score="score")
  obstacles(ref="obstacles_ref" :is-paused="is_game_paused")
  fugu(ref="fugu_ref" :is-paused="is_game_paused")
  o-modal.modal(v-model:active="show_modal")
    div(style="display: flex; flex-direction: column; align-items: center; min-width: 100vw; min-height: 100vh;")
      .game-over GAME OVER
      .score SCORE: {{ max_score }}
      pad(style="width: 90%")
        div.description multiply profit
        o-button.action-button(style="font-size: 24px" @click="open_link") Watch ads
      div(style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; width: 90%; margin-top: 3vh;")
        o-button.action-button(style="font-size: 24px; background: #3091FF;" tag="router-link" to="/") Menu
        o-button.action-button(style="font-size: 24px" @click="max_score = 0; is_game_paused = false; show_modal = false") Again
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.game-over {
  margin-top: 20px;
  font-family: "Jua", sans-serif;
  font-size: 48px;
  font-weight: 400;
  text-align: center;
  width: 100%;
  color: #ffffff;
  -webkit-text-stroke: 3px #000000;
}

.score {
  margin-top: 20px;
  margin-bottom: 25vh;
  font-family: "Jua", sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  color: #ffffff;
  -webkit-text-stroke: 1px #000000;
}

.description {
  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  line-height: 36.31px;
  text-align: left;
  color: #ffffff;
}

.action-button {
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background: #f5308f;
  border: 1px solid #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-family: "Jua", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
