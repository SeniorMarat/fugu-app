<!--
Навигационная панель
-->
<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.nav-bar
  .tabs
    .tab
      h5 Home
      o-icon(icon="check-circle" size="small")
    .tab
      h5 Frens
      o-icon(icon="home" size="small")
    .tab
      h5 Tasks
</template>

<style modulelang="scss">
.nav-bar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: orange;
  bottom: 0;
  left: 0;
  width: 100%;
}

.o-icon {
  width: 24px;
  height: 24px;
  font-size: 24px;
}

.tabs {
  display: flex;
  .tab {
    padding: 10px;
    flex: 1;
    text-align: center;
    &._active {
      background: #ddd;
    }
  }
}
</style>
