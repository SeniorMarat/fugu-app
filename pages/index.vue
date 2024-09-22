<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
import { TonConnectButton } from "@townsquarelabs/ui-vue"
</script>

<template lang="pug">
.page
  score
  img(src="/public/small_fugu.png" style="max-width: 75%")
  ton-connect-button
  o-button.feed Feed
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

img {
  margin-top: 15vh;
  animation: move-up-down 3s infinite;
}

@keyframes move-up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}

.feed {
  width: 80%;
  z-index: 1;
  position: fixed;
  bottom: 96px;
  background-color: #ffc422;
  color: #3a3333;
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-size: 36px;
  padding: 0px;
  border-radius: 10px;
  height: 60px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 1px solid #000000;
}
</style>
