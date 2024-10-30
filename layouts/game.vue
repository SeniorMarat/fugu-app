<script setup lang="ts">
function get_image_path(name: string) {
  return new URL(`/public/obstacles/${name}`, import.meta.url).href
}

onMounted(() => {
  const el = document.getElementById("turbulence")
  let x = 0
  let y = 0
  setInterval(() => {
    x = (x + 0.1) % 10
    y = (x + 0.1) % 10
    el?.setAttribute("baseFrequency", `${x / 1000} ${y / 1000}`)
  }, 16)
})
</script>

<template lang="pug">
.layout
  svg(style="position: absolute; height: 110vh")
    filter(id="noise" x="0%" y="0%" width="100%" height="100vh")
      feTurbulence(id="turbulence" baseFrequency="0.02 0.03" numOctaves="1" result="NOISE")
      feDisplacementMap(in="SourceGraphic" in2="NOISE" scale="20")
  .overlay
    img.bg(:src="get_image_path('bg.svg')" class="pic")
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
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  display: flex;
  height: 100svh;
  width: 100%;
  background-color: inherit;
  flex-direction: column;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 110vh;
  top: -10vh;
}

.bg {
  height: 110vh;
  filter: url(#noise);
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
.fish {
  position: absolute;
  height: 1.5vh;
  opacity: 0.15;
}
</style>
