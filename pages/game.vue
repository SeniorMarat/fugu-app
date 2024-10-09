<script setup lang="ts">
import Fugu from "~/components/game/fugu.vue"
import Obstacles from "~/components/game/obstacles.vue"

definePageMeta({
  layout: "game",
})
</script>

<template lang="pug">
obstacles
fugu
</template>

<style module lang="scss">
body {
  overflow: hidden;
}
</style>
