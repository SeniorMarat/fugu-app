<script lang="ts">
</script>

<template lang="pug">
div(style="display: flex; flex-direction:column; justify-content: center; align-items: center; width: 100vw; padding-top: 5vh; overflow: hidden;")
  pad(style="width: 90%; height: 70vh; position: relative;")
    o-button.count-button(@click="() => $router.push('/shop')")
      img(class="icon" src="/public/plus-circle.svg" style="width: 35px; margin-left: 10px")
      div(style="position: absolute; left: 50%; transform: translateX(-50%);") 2
    img.wheel(src="/public/big-wheel2.png")
  o-button.spin-button Spin
</template>

<style module lang="scss">
.count-button {
  position: absolute;
  top: 20px;
  width: 150px;
  height: 50px;
  background: #3091ff;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-family: "Inter";
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.wheel {
  width: 100%;
  animation: spin 5s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spin-button {
  width: 216px;
  height: 56px;
  border-radius: 20px;
  background: #f5308f;
  border: px solid #000000;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-family: "Jua", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
</style>
