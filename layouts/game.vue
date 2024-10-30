<script setup lang="ts">
// const fishes = [{ x: 11, y: 13 }, { x: 15, y: 15 }, { x: 15, y: 20 }, { x: 17, y: 10 }, { x: 60, y: 10 }, { x: 70, y: 13 }, { x: 25, y: 30 }, { x: 40, y: 22 }, { x: 28, y: 38 }, { x: 35, y: 18 }, { x: 48, y: 32 }]
// const fishes_plavnik = [{ x: 51, y: 53 }, { x: 55, y: 58 }, { x: 52, y: 60 }, { x: 10, y: 90 }, { x: 15, y: 95 }, { x: 65, y: 72 }, { x: 80, y: 62 }, { x: 68, y: 78 }, { x: 75, y: 58 }, { x: 88, y: 70 }]
</script>

<template lang="pug">
.layout
  // img.fish(v-for="(fish, index) in fishes" :key="index" src="/public/obstacles/fish.svg" :style="{ left: `${fish.x}%`, top: `${fish.y}%` }")
  // img.fish(v-for="(fish, index) in fishes_plavnik" :key="index" src="/public/obstacles/fish-plavnik.svg" :style="{ left: `${fish.x}%`, top: `${fish.y}%` }")
  .main
    .page: nuxt-page
</template>

<style module lang="scss">
* {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.layout {
  background: rgba(0, 142, 255, 1);
  background-image: url("/public/obstacles/bg.svg");
  background-size: 400%;
  background-position: 50% 50%;
  overflow: hidden;
  display: flex;
  height: 100svh;
  width: 100%;
  background-color: inherit;
  flex-direction: column;
}

.main {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  backdrop-filter: blur(2px);
}
.page {
  flex: 1;
}
.fish {
  position: absolute;
  height: 1.5vh;
  opacity: 0.15;
}
</style>
