<script setup lang="ts">
</script>

<template lang="pug">
.layout
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
  background-size: cover;
  background-position: 50%;
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
