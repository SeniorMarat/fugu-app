<script setup lang="ts">
interface Bubble {
  image: string
  left: number
  top: number
  speed: number
  size: number
}

const bubble_quantity = 15
const bubble_images = ["ton.png"]

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
      speed: (Math.random() + 0.5) * 0.1,
      size: Math.floor(Math.random() * (60 - 30 + 1)) + 30,
    })
  }
}

function animateBubbles() {
  setInterval(() => {
    bubbles.value.forEach((bubble) => {
      bubble.top -= bubble.speed
      if (bubble.top < -10) {
        bubble.top = 100
      }
    })
  }, 10)
}

function get_bubble_path(name: string) {
  return new URL(`/public/bubbles/${name}`, import.meta.url).href
}
</script>

<template lang="pug">
.bubble-container
  .bubble(v-for="(bubble, index) in bubbles" :key="index" :style="{ left: `${bubble.left}%`, top: `${bubble.top}%`, width: `${bubble.size}px`, height: `${bubble.size}px` }")
    img(:src="get_bubble_path(bubble.image)" :style="{ width: '70%', top: `${bubble.top}` }")
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
  border-radius: 50%;
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.2),
    inset 0px 5px 15px 2.5px rgba(255, 255, 255, 1);
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: sideWays 4s ease-in-out infinite alternate;
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 20px;
  }
}
</style>
