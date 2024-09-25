<script setup lang="ts">
import { useTonConnectModal, useTonConnectUI, useTonWallet } from "@townsquarelabs/ui-vue"

const wallet = useTonWallet()

const { open } = useTonConnectModal()
const [TonConnectUI] = useTonConnectUI()

const my_transaction = {
  validUntil: Math.floor(Date.now() / 1000) + 60,
  messages: [
    {
      address: "UQDhTbUFoREWU968r97w_nwvrcR991bqeVXLYX_TO6UcgRzS",
      amount: "10000000",
    },
  ],
}

function send_transaction() {
  TonConnectUI.sendTransaction(my_transaction)
}

function send_donat() {
  if (wallet.value) {
    send_transaction()
  } else {
    open()
  }
}
</script>

<template lang="pug">
div
  nav-button(label="support ocean" path="shop" icon="heart" :on-click="send_donat" style="width: 100px; height: 100px; position:fixed; top: 50%;; left: 50%; transform: translate(-50%, -50%);")
</template>

<style modula lang="scss">
</style>
