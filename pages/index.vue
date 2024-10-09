<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"
</script>

<template lang="pug">
.page
  score
  div(style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; width: 100%;")
    nav-button(icon="shop" label="shop" rounded="right" path="/shop")
    nav-button(icon="wallet" label="wallet" rounded="left" path="/wallet")
  img(src="/public/small_fugu.png" style="width: 100%;").fugu
  o-button.play(@click="() => $router.push('/game')") Play
</template>

<style module lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.fugu {
  margin-top: 7vh;
  animation: move-up-down 6s infinite ease-in-out;
  max-width: 90%;
}

@keyframes move-up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}

.play {
  width: 80%;
  z-index: 1;
  position: fixed;
  bottom: 96px;
  background-color: #f5308f;
  color: #fff;
  -webkit-text-stroke: 1px #000;
  font-family: "Jua", sans-serif;
  font-weight: 400;
  font-size: 36px;
  padding: 0px;
  border-radius: 10px;
  height: 60px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 0.5px solid #000;
}

.side-button {
  width: 61px;
  height: 61px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #3c71a23b;
  color: #fff;
  border: 2px solid #c3cfd933;
  box-shadow: 4px 4px 4px 0px #00000040;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}

.side-button.left {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.side-button.right {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
</style>
