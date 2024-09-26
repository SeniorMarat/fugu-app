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
body {
  background: linear-gradient(
    149deg,
    rgba(0, 255, 255, 1) 0%,
    rgba(0, 191, 255, 1) 42%,
    rgba(187, 24, 148, 1) 72%,
    rgba(65, 105, 225, 1) 100%
  );
  animation: gradient 10s infinite linear;
  background-size: 400%;

  background-size: cover;
  overflow: hidden;
  background-size: 400%;
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
}

.page {
  flex: 1;
  overflow-y: auto;
}

@keyframes gradient {
  0% {
    background-position: 80% 0%;
  }
  50% {
    background-position: 20% 100%;
  }
  100% {
    background-position: 80% 0%;
  }
}
</style>
