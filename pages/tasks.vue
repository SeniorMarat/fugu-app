<script setup lang="ts">

</script>

<template lang="pug">
div(style="display: flex; flex-direction:column; justify-content: center; align-items: center; width: 100vw; padding-top: 300px;")
  task(v-for="i in 5" :key="i" label="Make a TON transaction" :value="2000")
</template>

<style module lang="scss">
</style>
