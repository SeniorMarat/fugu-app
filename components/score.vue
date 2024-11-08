<script setup lang="ts">
const { useWebApp } = await import("vue-tg")
const { initDataUnsafe } = useWebApp()
const username = computed(() => initDataUnsafe.user?.username.toUpperCase() || "USERNAME")
</script>

<template lang="pug">
.score
  .username {{ username }} SCORE:
  .value 130000
</template>

<style module lang="scss">
.score {
  padding-top: 15px;
  text-align: center;
  font-weight: 400;
}
.username {
  color: #fff;
  font-size: 23px;
  -webkit-text-stroke: 0.5px #000;
  text-shadow: 0px 4px 4px #00000040;
  padding-top: 15px;
}
.value {
  color: #ffc422;
  font-size: 64px;
  -webkit-text-stroke: 0.7px #000;
  text-shadow: 0px 4px 4px #00000040;
  margin-top: -4px;
}
.label {
  color: #f5f5f5;
  font-size: 20px;
  -webkit-text-stroke: 0.5px #000;
  margin-top: -18px;
}
</style>
