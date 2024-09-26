<script setup lang="ts">
</script>

<template lang="pug">
.layout
  #bg-wrap
  svg(viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice")
    defs
      radialGradient#Gradient1(cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5")
        animate(attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite")
        stop(offset="0%" stop-color="rgba(255, 0, 255, 1)")
        stop(offset="100%" stop-color="rgba(255, 0, 255, 0)")
      radialGradient#Gradient2(cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5")
        animate(attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite")
        stop(offset="0%" stop-color="rgba(255, 255, 0, 1)")
        stop(offset="100%" stop-color="rgba(255, 255, 0, 0)")
      radialGradient#Gradient3(cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5")
        animate(attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite")
        stop(offset="0%" stop-color="rgba(0, 255, 255, 1)")
        stop(offset="100%" stop-color="rgba(0, 255, 255, 0)")
      radialGradient#Gradient4(cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5")
        animate(attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite")
        stop(offset="0%" stop-color="rgba(0, 255, 0, 1)")
        stop(offset="100%" stop-color="rgba(0, 255, 0, 0)")
      radialGradient#Gradient5(cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5")
        animate(attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite")
        stop(offset="0%" stop-color="rgba(0,0,255, 1)")
        stop(offset="100%" stop-color="rgba(0,0,255, 0)")
      radialGradient#Gradient6(cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5")
        animate(attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite")
        stop(offset="0%" stop-color="rgba(255,0,0, 1)")
        stop(offset="100%" stop-color="rgba(255,0,0, 0)")
    rect(x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)")
      animate(attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite")
      animate(attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite")
      animateTransform(attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite")
    rect(x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)")
      animate(attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite")
      animate(attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite")
      animateTransform(attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite")
  bubbles
  .main
    .page: nuxt-page
  nav-bar
</template>

<style module lang="scss">
body {
  background-color: aqua;
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
