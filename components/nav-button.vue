<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: "" },
})
</script>

<template lang="pug">
.nav-button
  h5 {{ props.label }}
  slot(name="icon")
</template>

<style module lang="scss">
.nav-button {
  width: 61px;
  height: 61px;
  display: flex;
  flex-direction: column;
  background-color: #dae1e733;
  color: #fff;
  border: 2px solid #c3cfd933;
  box-shadow: 4px 4px 4px 0px #00000040;
  border-radius: 20px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
}
</style>
