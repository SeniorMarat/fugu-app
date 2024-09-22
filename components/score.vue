<script setup lang="ts">
const { useWebApp } = await import("vue-tg")
const { initDataUnsafe } = await useWebApp()
const username = initDataUnsafe.user?.username.toUpperCase() || "SUNDVR"
</script>

<template lang="pug">
.score
  .username {{ username }} SCORE:
  .value 130000
  .label fugu points
</template>

<style module lang="scss">
.score {
  text-align: center;
  font-family: "Jua", sans-serif;
  font-weight: 400;
}
.username {
  color: #f5751f;
  font-size: 20px;
  -webkit-text-stroke: 0.5px #000;
  text-shadow: 0px 4px 4px #00000040;
  padding-top: 15px;
}
.value {
  color: #fec925;
  font-size: 64px;
  -webkit-text-stroke: 1px #000;
  text-shadow: 0px 4px 4px #00000040;
  margin-top: -10px;
}
.label {
  color: #f5f5f5;
  font-size: 20px;
  -webkit-text-stroke: 0.5px #000;
  margin-top: -18px;
}
</style>
