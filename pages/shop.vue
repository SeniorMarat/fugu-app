<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
import { useTonConnectUI } from "@townsquarelabs/ui-vue"

const [TonConnectUI] = useTonConnectUI()

const my_transaction = {
  validUntil: Math.floor(Date.now() / 1000) + 60,
  messages: [
    {
      address: "UQDhTbUFoREWU968r97w_nwvrcR991bqeVXLYX_TO6UcgRzS",
      amount: "1",
    },
    {
      address: "UQDhTbUFoREWU968r97w_nwvrcR991bqeVXLYX_TO6UcgRzS",
      amount: "2",
    },
  ],
}

function send_transaction() {
  TonConnectUI.sendTransaction(my_transaction)
}
</script>

<template lang="pug">
  o-button(@click="send_transaction") send transaction
</template>
