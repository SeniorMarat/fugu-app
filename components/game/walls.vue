<script setup lang="ts">
const props = defineProps<{ isPaused: boolean }>()

const wall_speed = ref(2.5)
const wall_height = ref(window.innerHeight / 2)

const walls = ref<Array<Ref<{ y: number }>>>([ref({ y: -wall_height.value }), ref({ y: 0.0 }), ref({ y: wall_height.value })])
window.addEventListener("resize", () => {
  wall_height.value = window.innerHeight / 2
  walls.value = [ref({ y: -wall_height.value }), ref({ y: 0.0 }), ref({ y: wall_height.value })]
})

function get_wall_path(name: string) {
  return new URL(`/public/obstacles/${name}`, import.meta.url).href
}

onMounted(() => {
  setInterval(() => {
    if (!props.isPaused) {
      for (let i = walls.value.length - 1; i >= 0; i--) {
        walls.value[i].value.y += wall_speed.value
        if (walls.value[i].value.y > window.innerHeight) {
          walls.value.splice(i, 1)
        }
      }
      // console.log(walls.value.at(-1).value.y)
      if (walls.value!.at(-1)!.value.y >= -5) {
        walls.value.push(ref({ y: -wall_height.value }))
      }
    }
  }, 16)
})
</script>

<template lang="pug">
.walls-container
  div(v-for="(wall, index) in walls" :key="index")
    img(:src="get_wall_path('wall.svg')" :style="{ height: '50vh', left: '-6.4vh', top: `${wall.value.y}px`, position: 'absolute' }")
    img(:src="get_wall_path('wall.svg')" :style="{ height: '50vh', right: '-6.4vh', top: `${wall.value.y}px`, position: 'absolute' }")
</template>

<style module lang="scss">
.walls-container {
  min-width: 100%;
  height: 100vh;
  position: absolute;
}
</style>
