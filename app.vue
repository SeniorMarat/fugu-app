<script setup lang="ts">
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue"

const options = {
  manifestUrl: "https://localhost:3000/tonconnect-manifest.json",
}
</script>

<template lang="pug">
ton-connect-u-i-provider(:options="options")
  nuxt-layout
    nuxt-page
</template>
