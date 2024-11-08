<script setup lang="ts">
const tasks = ref<{ label: string, reward: number, type: "nickname" | "invite" | "transaction" | "subscribe" }[]>([
  { label: "make a TON transaction", type: "transaction", reward: 2000 },
  { label: "Subscribe to channel", type: "subscribe", reward: 250 },
  { label: "Subscribe to FUGU Twitter", type: "subscribe", reward: 150 },
  { label: "Invite 10 friends", type: "invite", reward: 1000 },
  { label: "Add 🐡 emoji to your nickname", type: "nickname", reward: 1000 },
])
</script>

<template lang="pug">
div(style="display: flex; flex-direction:column; justify-content: center; align-items: center; width: 100vw; padding-top: 5vh;")
  .title Fortune
  pad(style="width: 180px; height: 160px")
    img.fortune-circle(src="/public/big-wheel2.png" style="width: 170px;" @click="() => $router.push('/fortune')")
  .title Tasks
  task(v-for="(task, index) in tasks" :key="index" :label="task.label" :value="task.reward" :type="task.type")
</template>

<style module lang="scss">
.title {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  -webkit-text-stroke: 1px #000;
  text-shadow: 0px 4px 4px #00000040;
}

.fortune-circle {
  animation: spin 5s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
