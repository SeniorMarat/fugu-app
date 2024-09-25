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
  background: rgb(74, 72, 231);
  background: linear-gradient(
    286deg,
    rgba(74, 72, 231, 1) 0%,
    rgba(236, 162, 237, 1) 17%,
    rgba(125, 120, 224, 1) 35%,
    rgba(141, 166, 226, 1) 48%,
    rgba(44, 176, 245, 1) 69%,
    rgba(11, 177, 226, 1) 88%,
    rgba(0, 212, 255, 1) 100%
  );
  background-size: cover;
  overflow: hidden;
  animation: gradient 10s infinite linear;
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
