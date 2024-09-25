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
    rgba(24, 187, 156, 1) 0%,
    rgba(106, 57, 175, 1) 42%,
    rgba(187, 24, 148, 1) 72%,
    rgba(115, 53, 134, 1) 100%
  );
  background-size: cover;
  overflow: hidden;
  animation: gradient 5s infinite linear;
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
