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
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 70px;
  background-color: #c5caff47;
  color: #fff;
  border: 2px solid #c3cfd933;
  box-shadow: 4px 4px 4px 0px #00000040;
  border-radius: 20px;
}

.tabs {
  display: flex;
  .tab {
    padding: 25px;
    text-align: center;
    &._active {
      background: #ddd;
    }
  }
}
</style>
