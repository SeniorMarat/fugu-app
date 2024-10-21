<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"

const props = defineProps<{
  label: string
  icon: string
  path?: string
  rounded?: "all" | "left" | "right"
  onClick?: () => void
}>()

function get_svg_path(name: string) {
  return new URL(`/public/${name}.svg`, import.meta.url).href
}

const roundedClass = computed(() => {
  if (props.rounded === "all") {
    return "all-rounded"
  }
  if (props.rounded === "left") {
    return "left-rounded"
  }
  if (props.rounded === "right") {
    return "right-rounded"
  }
  return "all-rounded"
})
</script>

<template lang="pug">
o-button.nav-button.all_rounded(:class="roundedClass" tag="router-link" :to="props.path || '/'" @click="props.onClick")
  img(class="icon" :src="get_svg_path(props.icon)" style="width: 50%;")
  | {{ props.label }}
</template>

<style lang="scss">
.nav-button {
  width: 61px;
  height: 61px;
  display: flex;
  backdrop-filter: blur(10px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3c71a23b;
  text-align: center;
  color: #fff;
  border: 2px solid #c3cfd933;
  box-shadow: 4px 4px 4px 0px #00000040;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;

  &.all-rounded {
    border-radius: 20px;
  }

  &.right-rounded {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.left-rounded {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
}

.nav-button:focus {
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
</style>
