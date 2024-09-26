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
  background: rgb(186, 85, 249);
  background: linear-gradient(
    90deg,
    rgba(186, 85, 249, 1) 0%,
    rgba(150, 93, 249, 1) 6%,
    rgba(95, 90, 251, 1) 18%,
    rgba(81, 97, 241, 1) 26%,
    rgba(88, 118, 247, 1) 31%,
    rgba(80, 144, 252, 1) 41%,
    rgba(69, 174, 252, 1) 49%,
    rgba(51, 204, 253, 1) 62%,
    rgba(36, 227, 254, 1) 73%,
    rgba(0, 212, 255, 1) 100%
  );
  background-size: cover;
  overflow: hidden;
  animation: gradient 10s infinite ease-in-out;
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
