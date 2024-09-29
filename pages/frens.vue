<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"

interface fren {
  name: string
  amount: number
}

const friends = ref<fren[]>([{ name: "Marat", amount: 1000 }, { name: "Andrey", amount: 1000 }, { name: "Yan", amount: 1000 }, { name: "Maxim", amount: 1000 }])
</script>

<template lang="pug">
.frens
  .label Invite Frens!
  .invite
    div(style="font-size: 20px") Invite a friend
    div(style="font-size: 13px") you will both get ... coins!
  .friend-info
    .side-text Total amount: {{ friends.length > 0 ? friends.map(f => f.amount).reduce((a, b) => a + b) : 0 }}
    .label(style="font-size: 24px") Friend list
    .side-text Refs invited: {{ friends.length }}
  pad(style="width: 95%; justify-content: flex-start; min-height: 260px; padding-top: 10px;")
    div(v-if="friends.length > 0" style="width: 100%")
      div(v-for="(friend, index) in friends" :key="index" style="display: flex; flex-direction: column; align-items: center; width: 100%; height: 45px" @click="friends.splice(index, 1)")
        div(style="display: flex; flex-direction: row; align-items: center; width: 100%; margin-left: 20px; margin-bottom: 10px;")
          img(src="/public/small_fugu.png" style="width: 20px; margin-right: 10px;")
          .friend-name {{ friend.name }}
        img(src="/public/separator.svg" class="icon" style="width: 100%; margin-left: 10px; margin-right: 10px;")
    div(v-if="friends.length === 0")
      .empty-text Looks like
      .empty-text you haven't invited anyone yet
      img(src="/public/angry-fugu.png" style="width: 300px; margin-bottom: -30px; margin-top: -50px;")
  div(style="display: flex; flex-direction: row; justify-content: space-between; width: 90%; margin-top: 5vh;")
    o-button.action-button Invite
      img(class="icon" src="/public/share.svg" style="width: 32px; margin-bottom: -5px; margin-left: 10px;")
    o-button.action-button(style="font-size: 24px") Copy link
      img(class="icon" src="/public/copy.svg" style="width: 24px; margin-bottom: -10px; margin-left: 10px;")
</template>

<style module lang="scss">
.frens {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
  overflow: hidden;
}

.label {
  font-family: "Jua", sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #fff;
  -webkit-text-stroke: 1px #000;
  text-shadow: 0px 4px 4px #00000040;
}

.invite {
  width: 360px;
  height: 57px;
  background: #3091ff;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-family: Jua;
  font-weight: 400;
  color: #fff;
  padding-left: 8px;
  padding-top: 4px;
}

.friend-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 320px;
  margin-top: 10vh;
}

.side-text {
  font-family: "Jua", sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #fff;
}

.friend-name {
  font-family: "Jua", sans-serif;
  font-size: 20px;
  font-weight: 400;
}

.empty-text {
  font-family: "Jua", sans-serif;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

.action-button {
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background: #f5308f;
  border: 1px solid #000000;
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
}
</style>
