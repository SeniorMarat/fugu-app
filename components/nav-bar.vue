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
      o-icon(icon="check-circle" class="icon" size="small")
    .tab
      h5 Frens
      o-icon(icon="home" class="is-primary icon" size="small")
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
  background-color: #3a3333;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
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
