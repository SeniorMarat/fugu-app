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
  background-image: linear-gradient(-45deg, #08c4d8, #0090e3);
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
