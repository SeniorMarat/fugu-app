<script setup lang="ts">
const fishes = [{ x: 11, y: 13 }, { x: 15, y: 20 }, { x: 17, y: 10 }, { x: 60, y: 10 }, { x: 70, y: 13 }]
const fishes_plavnik = [{ x: 51, y: 53 }, { x: 55, y: 58 }, { x: 52, y: 60 }, { x: 10, y: 90 }, { x: 15, y: 95 }]
</script>

<template lang="pug">
.layout
  img.fish(v-for="(fish, index) in fishes" :key="index" src="/public/obstacles/fish.svg" :style="{ left: `${fish.x}%`, top: `${fish.y}%` }")
  img.fish(v-for="(fish, index) in fishes_plavnik" :key="index" src="/public/obstacles/fish-plavnik.svg" :style="{ left: `${fish.x}%`, top: `${fish.y}%` }")
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

body {
  background: rgba(0, 142, 255, 1);
  overflow: hidden;
}

.layout {
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
  backdrop-filter: blur(3px);
}
.page {
  flex: 1;
}
.fish {
  position: absolute;
  height: 2vh;
  opacity: 0.1;
}
</style>
