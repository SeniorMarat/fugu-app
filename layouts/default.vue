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
    rgba(187, 24, 148, 1) 0%,
    rgba(94, 65, 225, 1) 21%,
    rgba(0, 98, 255, 1) 36%,
    rgba(0, 115, 255, 1) 50%,
    rgba(0, 98, 255, 1) 71%,
    rgba(94, 65, 225, 1) 86%,
    rgba(187, 24, 148, 1) 100%
  );
  animation: gradient 10s infinite linear;
  overflow: hidden;
  background-size: 10000% 10000%;
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
    background-position: -100% -100%;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>
