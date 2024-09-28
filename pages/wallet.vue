<script setup lang="ts">
import { OButton, ODropdown, ODropdownItem } from "@oruga-ui/oruga-next"
import { useTonAddress, useTonConnectModal, useTonConnectUI } from "@townsquarelabs/ui-vue"

const address = useTonAddress()
const { open } = useTonConnectModal()
const display_address = computed(() => address.value.slice(0, 3) + "..." + address.value.slice(-3))
const [TonConnectUI] = useTonConnectUI()

async function disconnect() {
  await TonConnectUI.disconnect()
}
</script>

<template lang="pug">
.wallet
  o-dropdown(v-if="address")
    template(#trigger)
      o-button.wallet-button
        img(class="icon" src="/public/wallet-ton-icon.svg" style="width: 18px; margin-right: 5px;")
        | {{ display_address }}
    o-dropdown-item.disconnect-button(@click="disconnect") Disconnect
  o-button.connect-button(v-if="!address" @click="open")
    div(style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 100%;")
      img(class="icon" src="/public/wallet.svg" style="width: 50px;")
      | Connect Wallet

  .action-container
    .balance-label Balance FUGU points
    .balance
      img(src="/public/small_fugu.png" style="width: 20px;")
      | 130000$F
    .coming-soon coming soon...
    o-button.withdraw-button Windraft
</template>

<style module lang="scss">
.disconnect-button {
  position: absolute;
  width: 160px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffffa0;
  text-align: center;
  border: 1px solid #000000;
  box-shadow: 2px 4px 4px 0px #00000040;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
}

.wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  gap: 35px;
  position: fixed;
  bottom: 15%;
}
.connect-button {
  width: 160px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5308f;
  text-align: center;
  color: #fff;
  border: 1px solid #000000;
  box-shadow: 2px 4px 4px 0px #00000040;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 500;
  border-radius: 20px;
}

.wallet-button {
  width: 160px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f5308fb2;
  text-align: center;
  color: #fff;
  border: 1px solid #000000;
  box-shadow: 2px 4px 4px 0px #00000040;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 500;
  border-radius: 20px;
}

.action-container {
  width: 360px;
  height: 385px;
  border-radius: 10px;
  background: #ffffff33;
  border: 2px solid #ffffff4d;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.balance-label {
  color: #fff;
  font-family: "Inter";
  -webkit-text-stroke: 2px #000;
  paint-order: stroke fill;
  font-weight: 700;
  font-size: 20px;
  margin-top: 18px;
}

.balance {
  margin-top: 14px;
  width: 300px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  gap: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  font-family: "Inter";
  -webkit-text-stroke: 2px #000;
  paint-order: stroke fill;
}

.coming-soon {
  padding-top: 70px;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 800;
}

.withdraw-button {
  width: 216px;
  height: 56px;
  border-radius: 20px;
  background: #f5308f;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-family: "Jua", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 40px;
}
</style>
