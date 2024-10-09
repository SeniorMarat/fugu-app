<!--
Component for handling bird ans it's position
-->

<script setup lang="ts">
const x = ref(100) // initial x position
const y = ref(0) // initial y position
const velocity = ref(0) // initial velocity
const gravity = ref(0.3) // gravity constant
const is_held = ref(false)
const max_speed = 10

onMounted(() => {
  setInterval(() => {
    update()
  }, 16)
  document.addEventListener("touchstart", () => is_held.value = true)
  document.addEventListener("mousedown", () => is_held.value = true)
  document.addEventListener("mouseup", () => is_held.value = false)
  document.addEventListener("touchend", () => is_held.value = false)
})

function update() {
  velocity.value += gravity.value
  y.value += velocity.value
  velocity.value -= is_held.value ? 0.8 : 0
  if (velocity.value < -max_speed) {
    velocity.value = -max_speed
  }
  if (velocity.value > max_speed) {
    velocity.value = max_speed
  }
  if (y.value < 0) {
    y.value = 0
    velocity.value = 0
  }
  if (y.value > document.documentElement.clientHeight - 50) {
    y.value = document.documentElement.clientHeight - 51
    velocity.value = 0
  }
}
</script>

<template lang="pug">
.fugu(:style="{ left: `${x}px`, top: `${y}px` }")
  // Add your pufferfish graphics here
  img(src="/public/angry-fugu.png" style="width: 100%;")
</template>

<style module lang="scss">
.fugu {
  position: absolute;
  width: 50px; /* adjust to match your pufferfish graphics */
  height: 50px; /* adjust to match your pufferfish graphics */
}
</style>
