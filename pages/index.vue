<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.page
  score
  img(src="/public/fugu.png" style="max-width: 90%")
  o-button.feed Feed
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
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
  height: 40px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 1px solid #000000;
}
</style>
