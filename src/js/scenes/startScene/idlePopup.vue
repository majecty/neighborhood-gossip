<script>
import BackButton from "../common/backButton.vue";

export default {
  name: "IdlePopup",
  emits: [
    "back",
  ],
  components: {
    BackButton,
  },
};
</script>

<template>
<div id="idle-popup-background" @click="$emit('back')">
</div>

<div id="idle-popup">
  <p>
    가만히 계셨군요. <br />
    화살표를 눌러서 <br />
    다른 페이지를<br />
    탐험해 보세요.
  </p>
</div>
<BackButton @click="$emit('back')" />
</template>

<style>
#idle-popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#idle-popup {
  background-image: url("/img/mainStreet/idle.png");
  width: 509px;
  height: 911px;
  position: absolute;
  top: calc(50% - 455px);
  left: calc(50% - 255px);
}

#idle-popup p {
  margin-top: 100px;
  text-align: center;
  font-size: 50px;
}
</style>
