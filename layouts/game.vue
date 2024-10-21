<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.layout
  o-button(style="position: absolute" @click="() => $router.push('/')") Back
  .main
    .page: nuxt-page
</template>

<style module lang="scss">
body {
  background: rgba(0, 142, 255, 1);
  background-size: 400%;
  overflow: hidden;
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
  width: 100%;
}
.page {
  flex: 1;
  overflow-y: auto;
}
</style>
