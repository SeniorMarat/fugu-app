<script setup lang="ts">
import { OButton, OModal } from "@oruga-ui/oruga-next"
import { useWindowSize } from "@vueuse/core"

import bonuses from "~/components/game/bonuses.vue"
import fugu from "~/components/game/fugu.vue"
import gameScore from "~/components/game/game-score.vue"
import obstacles from "~/components/game/obstacles.vue"
import Walls from "~/components/game/walls.vue"
import { useAdsgram } from "~/composables/useAdsgram"
import type { ShowPromiseResult } from "~/types/adsgram"

definePageMeta({
  layout: "game",
})

const { height } = useWindowSize()

const score = ref(0)
const is_game_paused = ref(false)
const show_modal = ref(false)

function onReward() {
  score.value = score.value * 2
}
function onError(result: ShowPromiseResult) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, 4))
}

const { showAd } = useAdsgram({ blockId: "4624", onReward, onError })

interface Obstacles {
  hitboxes:
  {
    x: number
    y: number
    height: number
    width: number
  }[]
}

interface Bonuses {
  hitboxes:
  {
    x: number
    y: number
    size: number
  }[]
}

interface Fugu {
  x: number
  y: number
  size: number
}

const obstacles_ref = ref<Obstacles>()
const bonuses_ref = ref<Bonuses>()
const fugu_ref = ref<Fugu>()

const is_colliding = computed(() => {
  if (obstacles_ref.value && fugu_ref.value) {
    const hitboxes = obstacles_ref.value.hitboxes
    for (const hitbox of hitboxes) {
      if (
        Math.abs(hitbox.x - (fugu_ref.value.x + fugu_ref.value.size / 2))
        < hitbox.width
        && fugu_ref.value.y + fugu_ref.value.size / 2 > hitbox.y
        && fugu_ref.value.y + fugu_ref.value.size / 2
        < hitbox.y + hitbox.height
      ) {
        return true
      }
    }
    if (fugu_ref.value.y > height.value || fugu_ref.value.y + fugu_ref.value.size < 0) {
      return true
    }
  }
  return false
})

const bonus_index = computed(() => {
  let touching_bonus_index = -1
  if (bonuses_ref.value && fugu_ref.value) {
    const hitboxes = bonuses_ref.value.hitboxes
    for (let i = 0; i < hitboxes.length; i++) {
      const hitbox = hitboxes[i]
      if (Math.sqrt((hitbox.x - fugu_ref.value.x - fugu_ref.value.size / 2) ** 2 + (hitbox.y + hitbox.size / 2 - fugu_ref.value.y - fugu_ref.value.size / 2) ** 2) < hitbox.size / 2 + fugu_ref.value.size / 2) {
        touching_bonus_index = i
        break
      }
    }
  }
  return touching_bonus_index
})

watch(is_colliding, (new_value) => {
  if (new_value) {
    is_game_paused.value = true
    show_modal.value = true
  }
})
</script>

<template lang="pug">
.page
  gameScore(:score="score")
  bonuses(ref="bonuses_ref" v-model:bonus_index="bonus_index" :is-paused="is_game_paused" @coin-collected="score += 1" @bomb-collected="is_game_paused = true, show_modal = true")
  obstacles(ref="obstacles_ref" :is-paused="is_game_paused")
  walls(:is-paused="is_game_paused")
  fugu(ref="fugu_ref" :is-paused="is_game_paused")
  o-modal.modal(v-model:active="show_modal")
    div(style="display: flex; flex-direction: column; align-items: center; min-width: 100vw; min-height: 100vh;")
      .game-over GAME OVER
      .score SCORE: {{ score }}
      pad(style="width: 90%")
        div.description multiply profit
        o-button.action-button(style="font-size: 24px" @click="showAd") Watch ads
      div(style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; width: 90%; margin-top: 3vh;")
        o-button.action-button(style="font-size: 24px; background: #3091FF;" tag="router-link" to="/") Menu
        o-button.action-button(style="font-size: 24px" @click="score = 0; is_game_paused = false; show_modal = false") Again
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
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  color: #ffffff;
  -webkit-text-stroke: 1px #000000;
}

.description {
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
