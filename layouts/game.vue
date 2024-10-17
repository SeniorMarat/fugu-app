<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.layout
  o-button(style="position: absolute" @click.stop.prevent="() => $router.push('/')") Back
  .page: nuxt-page
</template>

<style module lang="scss">
body {
  background: rgba(0, 142, 255, 1);
  overflow: hidden;
}
</style>
