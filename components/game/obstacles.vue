<script setup lang="ts">
import { onMounted, ref } from "vue"

const pipeWidth = 80
const pipeGap = 150
const pipeHeight = (window.outerHeight / 2) - pipeGap / 2
const pipeSpeed = 3
const pipeX = ref(0)

onMounted(() => {
  // animate pipe movement
  setInterval(() => {
    pipeX.value -= pipeSpeed
    if (pipeX.value < -pipeWidth) {
      pipeX.value = window.innerWidth - pipeWidth / 2
    }
  }, 16) // 16ms = 60fps
})

// collision detection
function checkCollision(fishX: number, fishY: number) {
  const pipeLeft = pipeX.value
  const pipeRight = pipeLeft + pipeWidth
  const pipeTop = 0
  const pipeBottom = pipeHeight
  const pipeGapTop = pipeGap
  const pipeGapBottom = pipeGap + pipeHeight

  if (
    (fishX + 50 > pipeLeft && fishX < pipeRight) // fish overlaps pipe horizontally
    && ((fishY < pipeTop || fishY + 50 > pipeBottom) // fish overlaps pipe vertically (top)
    && (fishY < pipeGapTop || fishY + 50 > pipeGapBottom)) // fish overlaps pipe vertically (bottom)
  ) {
    console.log("Collision detected!")
    // add scoring logic here
  }
}

// expose checkCollision function to parent component
defineExpose({ checkCollision })
</script>

<template lang="pug">
.obstacle-container
  .pipe-top(:style="{ height: `${pipeHeight}px`, left: `${pipeX}px` }")
  .pipe-bottom(:style="{ height: `${pipeHeight}px`, left: `${pipeX}px`, top: `${pipeGap + pipeHeight}px` }")
</template>

<style module lang="scss">
  .obstacle-container {
  position: absolute;
  width: 100%;
  height: 100vh;
}

.pipe-top,
.pipe-bottom {
  position: absolute;
  width: 20px;
  background-color: red;
}

.pipe-bottom {
  background-color: red;
}
</style>
