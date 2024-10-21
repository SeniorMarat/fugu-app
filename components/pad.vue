<template lang="pug">
.pad
  slot
</template>

<style lang="scss">
.pad {
  border-radius: 20px;
  background-color: #ffffff7c;
  backdrop-filter: blur(10px);
  border: 2px solid #ffffff4d;
  box-shadow: 2px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
