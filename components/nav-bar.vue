<!--
Навигационная панель
-->
<script setup lang="ts">
</script>

<template lang="pug">
.nav-bar
  .tabs
    .tab
      nav-button(label="Home" icon="home" path="/")
    .tab
      nav-button(label="Tasks" icon="tasks" path="/tasks")
    .tab
      nav-button(label="Frens" icon="frens" path="/frens")
</template>

<style modulelang="scss">
.nav-bar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 116px;
}

.o-icon {
  width: 24px;
  height: 24px;
  font-size: 24px;
}

.tabs {
  display: flex;
  .tab {
    padding: 25px;
    margin-bottom: -30px;
    text-align: center;
    &._active {
      background: #ddd;
    }
  }
}
</style>
