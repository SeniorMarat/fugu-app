<script setup  lang="ts">
</script>

<template lang="pug">
.layout
  .main
    .page: nuxt-page
  nav-bar
</template>

<style module lang="scss">
body {
  background-image: linear-gradient(-90deg, #08c8d7, #0499e1);
}
.layout {
  display: flex;
  height: 100svh;
  background-color: inherit;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page {
  flex: 1;
  overflow-y: auto;
}
</style>
