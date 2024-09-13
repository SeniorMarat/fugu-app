<script setup lang="ts">
interface Bubble {
  image: string
  left: number
  top: number
  speed: number
}

const bubbles = ref<Bubble[]>([])

onMounted(() => {
  createBubbles()
  animateBubbles()
})

function createBubbles() {
  const bubbleImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]
  for (let i = 0; i < 10; i++) {
    bubbles.value.push({
      image: bubbleImages[Math.floor(Math.random() * bubbleImages.length)],
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
  }, 16) // 16ms = 60fps
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
  opacity: 0.7;
}
</style>
