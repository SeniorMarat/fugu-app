<script setup lang="ts">
import { OButton } from "@oruga-ui/oruga-next"

const props = defineProps<{ label: string, value: number, type: "nickname" | "invite" | "transaction" | "subscribe" }>()
</script>

<template lang="pug">
.task
  .label {{ props.label }}
  div(style="display: flex; flex-direction: row;")
    .value +{{ props.value }} $FUGU
    o-button.check Check
    o-button.action(v-if="props.type !== 'nickname' && props.type !== 'invite'")
      img(
        v-if="props.type === 'transaction'"
        class="icon" src="/public/bubbles/ton.png" style="width: 20px; margin-top: 3px"
      )
      div(v-if="props.type === 'subscribe'") Join
    o-button.count(v-if="props.type === 'invite'") 9 / 10
</template>

<style module lang="scss">
.task {
  position: relative;
  background-color: #ffffff7c;
  backdrop-filter: blur(10px);
  width: 350px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid #ffffff4d;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 13px;
  padding-top: 7px;

  box-shadow: 0px 4px 4px 0px #00000040;

  font-weight: 500;
}

.label {
  font-size: 17px;
}

.value {
  font-size: 13px;
}

.check {
  position: absolute;
  left: 30%;
  background-color: #f5308f;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  margin-left: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.action {
  background-color: #0593e2;
  width: 56px;
  height: 26px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  border: 1px solid #bec1c580;
  transform: translateY(-50%);
  position: absolute;
  box-shadow: 0px 4px 4px 0px #00000040;
  top: 50%;
  right: 0;
}

.count {
  background-color: #f5f5f5;
  width: 56px;
  height: 26px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #bec1c580;
  transform: translateY(-50%);
  position: absolute;
  box-shadow: 0px 4px 4px 0px #00000040;
  top: 50%;
  right: 0;
}
</style>
