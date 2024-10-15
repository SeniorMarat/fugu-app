<script setup lang="ts">
import { onMounted, ref } from "vue"

const pipeWidth = 80
const pipeGap = 150
const pipeHeight = (window.outerHeight / 2) - pipeGap / 2
const pipeSpeed = 2.5
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

defineExpose({ pipeX, pipeHeight, pipeGap, pipeWidth })
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
