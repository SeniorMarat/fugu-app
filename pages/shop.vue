<script setup lang="ts">
import { useTonConnectUI } from "@townsquarelabs/ui-vue"

const [TonConnectUI] = useTonConnectUI()

const my_transaction = {
  validUntil: Math.floor(Date.now() / 1000) + 60,
  messages: [
    {
      address: "UQDhTbUFoREWU968r97w_nwvrcR991bqeVXLYX_TO6UcgRzS",
      amount: "1000",
    },
    {
      address: "UQDhTbUFoREWU968r97w_nwvrcR991bqeVXLYX_TO6UcgRzS",
      amount: "2000",
    },
  ],
}

function send_transaction() {
  TonConnectUI.sendTransaction(my_transaction)
}
</script>

<template lang="pug">
  nav-button(label="support ocean" icon="heart" :on-click="send_transaction" style="width: 100px; height: 100px; position:fixed; top: 50%;; left: 50%; transform: translate(-50%, -50%);")
</template>

<style modula lang="scss">
</style>
