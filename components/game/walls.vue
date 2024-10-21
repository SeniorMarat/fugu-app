<script setup lang="ts">
const props = defineProps<{ isPaused: boolean }>()

const wall_speed = ref(2.5)
const walls = ref([ref({ y: -410 }), ref({ y: 0.0 }), ref({ y: 410 }), ref({ y: 820 })])

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
        if (walls.value[i].value.y === 0.0) {
          walls.value.push(ref({ y: -410 }))
        }
      }
    }
  }, 16)
})
</script>

<template lang="pug">
.walls-container
  div(v-for="(wall, index) in walls" :key="index")
    img(:src="get_wall_path('wall-left.png')" :style="{ width: '100%', left: '0px', top: `${wall.value.y}px`, position: 'absolute' }")
    img(:src="get_wall_path('wall-right.png')" :style="{ width: '100%', left: '0px', top: `${wall.value.y}px`, position: 'absolute' }")
</template>

<style module lang="scss">
.walls-container {
  min-width: 100%;
  height: 100vh;
  position: absolute;
}
</style>
