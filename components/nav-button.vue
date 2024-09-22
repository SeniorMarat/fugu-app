<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"

const props = defineProps<{
  label: string
  icon: string
  path?: string
}>()

function get_svg_path(name: string) {
  return new URL(`/public/${name}.svg`, import.meta.url).href
}
</script>

<template lang="pug">
o-button.nav-button(tag="router-link" :to="props.path")
  img(class="icon" :src="get_svg_path(props.icon)")
  | {{ props.label }}
</template>

<style module lang="scss">
.nav-button {
  width: 61px;
  height: 61px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}

.nav-button:focus {
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
</style>
