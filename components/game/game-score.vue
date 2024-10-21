<script setup lang="ts">
const props = defineProps<{ score: number }>()
</script>

<template lang="pug">
.game-score {{ props.score }}
</template>

<style module lang="scss">
.game-score {
  padding-top: 15px;
  text-align: center;
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-size: 40px;
  -webkit-text-stroke: 0.5px #000;
  text-shadow: 0px 4px 4px #00000040;
  color: #fff;
}
</style>
