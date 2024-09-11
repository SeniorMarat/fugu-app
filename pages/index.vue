<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.page
  score
  img(src="/public/cute_fugu.png" style="min-width: 120%")
  o-button(class="button is-warning" style="width: 80%") Feed
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
</style>
