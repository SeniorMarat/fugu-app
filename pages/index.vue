<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.page
  score
  img(src="/public/small_fugu.png").fugu
  o-button.feed Feed
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.fugu {
  margin-top: 15vh;
  animation: move-up-down 6s infinite ease-in-out;
  max-width: 90%;
}

@keyframes move-up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
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
  background-color: #fb7013;
  color: #fff;
  -webkit-text-stroke: 1px #000;
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-size: 36px;
  padding: 0px;
  border-radius: 10px;
  height: 60px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 0.5px solid #000;
}
</style>
