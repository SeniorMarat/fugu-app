<script setup lang="ts">
import type { transform } from "typescript"
import { onMounted, ref } from "vue"

const pipeWidth = 80
const pipeGap = 150
const pipeHeight = ref((window.outerHeight / 2) - pipeGap / 2)
const pipeSpeed = 2.5
const pipeX = ref(0)

const pipeType = ref("bottom")

interface obstacle {
  x: number
  height: number
  width: number
  type: "top" | "bottom"
  image: string
}

const green_coral = ref<obstacle>({ x: window.innerWidth, height: 400, width: 400, type: "top", image: "coral1.png" })
const blue_coral = ref<obstacle>({ x: window.innerWidth, height: 400, width: 400, type: "bottom", image: "coral2.png" })
const red_coral = ref<obstacle>({ x: window.innerWidth, height: 400, width: 400, type: "bottom", image: "coral3.png" })

const obstacles = ref([red_coral])
onMounted(() => {
  // animate pipe movement
  setInterval(() => {
    for (let i = obstacles.value.length - 1; i >= 0; i--) {
      obstacles.value[i].value.x -= pipeSpeed
      if (obstacles.value[i].value.x < -obstacles.value[i].value.width) {
        obstacles.value.splice(i, 1)
        const newObstacle = get_random_obstacle()
        newObstacle.value.x = window.innerWidth
        obstacles.value.push(newObstacle)
      }
    }
  }, 16) // 16ms = 60fps
})

function get_random_obstacle() {
  const obstacles = [red_coral, blue_coral, green_coral]
  const randomIndex = Math.floor(Math.random() * obstacles.length)
  return ref<obstacle>({ ...obstacles[randomIndex].value })
}

function get_obstacle_path(name: string) {
  return new URL(`/public/obstacles/${name}`, import.meta.url).href
}

defineExpose({ pipeX, pipeHeight, pipeGap, pipeWidth, pipeType })
</script>

<template lang="pug">
.obstacle-container(v-for="(obstacle, index) in obstacles" :key="index")
  .pipe(v-if="obstacle.value.type === 'top'" :style="{ height: `${obstacle.value.height}px`, left: `${obstacle.value.x}px`, width: `${obstacle.value.width}px`, top: '0px', transform: 'rotate(180deg)' }")
    img(:src="get_obstacle_path(obstacle.value.image)" :style="{ width: '100%' }")
  .pipe(v-if="obstacle.value.type === 'bottom'" :style="{ height: `${obstacle.value.height}px`, left: `${obstacle.value.x}px`, width: `${obstacle.value.width}px`, bottom: '0px' }")
    img(:src="get_obstacle_path(obstacle.value.image)" :style="{ width: '100%' }")
</template>

<style module lang="scss">
  .obstacle-container {
  position: absolute;
  width: 100%;
  height: 100vh;
}

.pipe {
  position: absolute;
}
</style>
