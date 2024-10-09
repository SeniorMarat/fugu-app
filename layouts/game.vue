<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
  .layout
  o-button(@click="() => $router.push('/')") Back
    .page: nuxt-page
</template>
