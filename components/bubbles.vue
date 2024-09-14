<script setup lang="ts">
interface Bubble {
  image: string
  left: number
  top: number
  speed: number
}

const bubble_quantity = 15
const bubble_images = ["1.png", "2.png", "3.png", "4.png"]

const bubbles = ref<Bubble[]>([])

onMounted(() => {
  createBubbles()
  animateBubbles()
})

function createBubbles() {
  for (let i = 0; i < bubble_quantity; i++) {
    bubbles.value.push({
      image: bubble_images[Math.floor(Math.random() * bubble_images.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      speed: Math.random() * (0.5 - 0.2) + 0.2,
    })
  }
}

function animateBubbles() {
  setInterval(() => {
    bubbles.value.forEach((bubble) => {
      bubble.top -= bubble.speed
      if (bubble.top < -50) {
        bubble.top = 100
      }
    })
  }, 16)
}
function get_bubble_path(name: string) {
  return new URL(`/public/bubbles/${name}`, import.meta.url).href
}
</script>

<template lang="pug">
.bubble-container
  img(v-for="(bubble, index) in bubbles" :key="index" class="bubble" :style="{ left: `${bubble.left}%`, top: `${bubble.top}%` }" :src="get_bubble_path(bubble.image)")
</template>

<style>
.bubble-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bubble {
  position: absolute;
  width: 50px;
  height: 50px;
  opacity: 0.5;
}
</style>
