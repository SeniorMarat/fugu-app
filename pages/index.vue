<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.page
  img(src="/public/cute_fugu.png" style="width: 100%")
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
