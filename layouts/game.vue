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
  background-image: url("/public/obstacles/bg.svg");
  background-size: cover;
  background-position-x: center;
  overflow: hidden;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow-y: hidden;
}

.main {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
}
.page {
  flex: 1;
}
</style>
