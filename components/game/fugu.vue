<!--
Component for handling bird ans it's position
-->

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"

const props = defineProps<{
  isPaused: boolean
}>()

const { height } = useWindowSize()

const x = ref(100) // initial x position
const y = ref(height.value / 2) // initial y position
const size = ref(75)
const y_velocity = ref(0) // initial y_velocity
const gravity = ref(0.3) // gravity constant
const x_velocity = ref(3) // initial x velocity
const max_velocity = 7
const transform = computed(() => {
  return x_velocity.value < 0 ? "scaleX(1)" : "scaleX(-1)"
})

const isMobile = "ontouchstart" in window

onMounted(() => {
  setInterval(() => {
    if (!props.isPaused) {
      update()
    }
  }, 16)
  document.addEventListener("touchstart", () => {
    y_velocity.value = -6 // apply a fixed upward y_velocity
  })
  if (!isMobile) {
    document.addEventListener("mousedown", () => {
      y_velocity.value = -6 // apply a fixed upward y_velocity
    })
  }
})
watch(() => props.isPaused, (newValue, oldValue) => {
  if (newValue === false && oldValue === true) {
    x.value = 100 // reset x position to initial value
    y.value = height.value / 2 // reset y position to initial value
    y_velocity.value = 0 // reset y_velocity to initial value
  }
})

function update() {
  // change y position
  y_velocity.value += gravity.value
  y.value += y_velocity.value

  // change x position
  x.value += x_velocity.value

  // velocity out of bounds
  if (y_velocity.value < -max_velocity) {
    y_velocity.value = -max_velocity
  }
  if (y_velocity.value > max_velocity) {
    y_velocity.value = max_velocity
  }

  // x position out of bounds
  if (x.value < 0) {
    x.value = 0
    x_velocity.value *= -1
  }
  if (x.value > document.documentElement.clientWidth - size.value) {
    x_velocity.value *= -1
    x.value = document.documentElement.clientWidth - size.value
  }
}

defineExpose({ x, y, size })
</script>

<template lang="pug">
.fugu(:style="{ left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size}px` }")
  img(src="/public/fugu.svg" :style="{ width: '100%', transform }")
</template>

<style module lang="scss">
.fugu {
  position: absolute;
}
</style>
