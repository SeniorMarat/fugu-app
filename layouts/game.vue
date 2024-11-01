<script setup lang="ts">
</script>

<template lang="pug">
.layout
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
  background: rgba(0, 142, 255, 1);
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
  width: 100%;
}
.page {
  flex: 1;
}
</style>
