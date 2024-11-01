<script setup lang="ts">
</script>

<template lang="pug">
.layout
  bubbles
  .main
    .page: nuxt-page
  nav-bar
</template>

<style module lang="scss">
.layout {
  background: rgba(0, 142, 255, 1);
  background-size: 400%;
  overflow: hidden;
  display: flex;
  height: 100svh;
  width: 100%;
  flex-direction: column;
}

.main {
  display: flex;
  position: absolute;
  flex-direction: column;
}

.page {
  flex: 1;
}
</style>
