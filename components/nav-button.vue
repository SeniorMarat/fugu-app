<script setup lang="ts">
import { OButton, OIcon } from "@oruga-ui/oruga-next"

const props = defineProps<{
  label: string
  icon: string
}>()
</script>

<template lang="pug">
o-button.nav-button
  o-icon(pack="mdi" :icon="icon" size="medium")
  | {{ props.label }}
</template>

<style module lang="scss">
.nav-button {
  width: 61px;
  height: 61px;
  display: flex;
  flex-direction: column;
  background-color: #dae1e733;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #c3cfd933;
  box-shadow: 4px 4px 4px 0px #00000040;
  border-radius: 20px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
}
</style>
