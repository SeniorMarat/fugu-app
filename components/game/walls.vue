<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"

const props = defineProps<{ isPaused: boolean }>()

const { height } = useWindowSize()

const wall_speed = ref(2.5)
const wall_height = computed(() => height.value / 2.0)

const walls = ref<Array<Ref<{ y: number, img: string }>>>([ref({ y: wall_height.value, img: "wall1.svg" }), ref({ y: +5, img: "wall2.svg" }), ref({ y: -wall_height.value + 10, img: "wall3.svg" })])

function get_wall_path(name: string) {
  return new URL(`/public/obstacles/${name}`, import.meta.url).href
}
onMounted(() => {
  setInterval(() => {
    if (!props.isPaused) {
      for (let i = walls.value.length - 1; i >= 0; i--) {
        walls.value[i].value.y += wall_speed.value
        if (walls.value[i].value.y > height.value) {
          walls.value.splice(i, 1)
        }
      }
      if (walls.value!.at(-1)!.value.y >= -5) {
        const names = ["wall1.svg", "wall2.svg", "wall3.svg", "wall4.svg", "wall5.svg"]
        const random_index = Math.floor(Math.random() * names.length)
        walls.value.push(ref({ y: -wall_height.value, img: names[random_index] }))
      }
    }
  }, 16)
})
</script>

<template lang="pug">
.walls-container(:style="{ height: `${height}px` }")
  div(v-for="(wall, index) in walls" :key="index")
    img(:src="get_wall_path(wall.value.img)" :style="{ height: `${wall_height}px`, left: '-6.4vh', top: `${wall.value.y}px`, position: 'absolute' }")
    img(:src="get_wall_path(wall.value.img)" :style="{ height: `${wall_height}px`, right: '-6.4vh', top: `${wall.value.y}px`, position: 'absolute' }")
</template>

<style module lang="scss">
.walls-container {
  min-width: 100%;
  position: absolute;
  overflow: hidden;
}
</style>
