<script setup lang="ts">
const obstacle_speed = 2.5

interface Obstacle {
  y: number
  height: number
  width: number
  type: "left" | "right"
  image: string
}

const green_coral = ref<Obstacle>({ y: 0, height: 100, width: 25, type: "left", image: "coral1.png" })
const blue_coral = ref<Obstacle>({ y: 200, height: 100, width: 25, type: "right", image: "coral2.png" })
const red_coral = ref<Obstacle>({ y: 0, height: 100, width: 25, type: "left", image: "coral3.png" })

const obstacles = ref([red_coral, blue_coral])
onMounted(() => {
  setInterval(() => {
    for (let i = obstacles.value.length - 1; i >= 0; i--) {
      obstacles.value[i].value.y += obstacle_speed
      if (obstacles.value[i].value.y > window.innerHeight + obstacles.value[i].value.height) {
        const newObstacle = get_random_obstacle()
        newObstacle.value.y = -obstacles.value[i].value.height
        obstacles.value.splice(i, 1)
        obstacles.value.push(newObstacle)
      }
    }
  }, 16)
})

function get_random_obstacle() {
  const obstacles = [red_coral, blue_coral, green_coral]
  const randomIndex = Math.floor(Math.random() * obstacles.length)
  return ref<Obstacle>({ ...obstacles[randomIndex].value })
}

function get_obstacle_path(name: string) {
  return new URL(`/public/obstacles/${name}`, import.meta.url).href
}

const hitboxes = computed(() => {
  return obstacles.value.map((obstacle) => {
    return {
      x: obstacle.value.type === "left" ? obstacle.value.width : 0,
      y: obstacle.value.y,
      height: obstacle.value.height,
      width: obstacle.value.width,
    }
  })
})

defineExpose({ hitboxes })
</script>

<template lang="pug">
.obstacle-container(v-for="(obstacle, index) in obstacles" :key="index")
  .left(v-if="obstacle.value.type === 'left'" :style="{ height: `${obstacle.value.height}px`, left: `0px`, width: `${obstacle.value.width}px`, top: `${obstacle.value.y}px` }")
    img(:src="get_obstacle_path(obstacle.value.image)" :style="{ height: '100px', width: '25px' }")
  .right(v-if="obstacle.value.type === 'right'" :style="{ height: `${obstacle.value.height}px`, right: `0px`, width: `${obstacle.value.width}px`, top: `${obstacle.value.y}px` }")
    img(:src="get_obstacle_path(obstacle.value.image)" :style="{ height: '100px', width: '25px' }")
</template>

<style module lang="scss">
  .obstacle-container {
  position: absolute;
  width: 100%;
  height: 100vh;
}

.left {
  position: absolute;
}

.right {
  position: absolute;
}
</style>
