<script setup lang="ts">

</script>

<template lang="pug">
div(style="display: flex; flex-direction:column; justify-content: center; align-items: center; width: 100vw; padding-top: 5vh;")
  .title Fortune
  .fortune-pad
    img.fortune-circle(src="/public/div.loader.png" style="width: 170px;")
  .title Tasks
  task(v-for="i in 5" :key="i" label="Make a TON transaction" :value="2000")
</template>

<style module lang="scss">
.title {
  font-family: "Jua", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  -webkit-text-stroke: 1px #000;
  text-shadow: 0px 4px 4px #00000040;
}

.fortune-pad {
  width: 180px;
  height: 160px;
  border-radius: 20px;
  background: #ffffff33;
  border: 2px solid #ffffff4d;
  box-shadow: 2px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fortune-circle {
  animation: spin 2s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
