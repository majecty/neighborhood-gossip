<script>
import { sound } from "../../sound";

export default {
  name: "WindowButton",
  methods: {
    onClick() {
      sound.play("neighborhood");
    },
  },
};
</script>

<template>
<button id="baekgol-window-button" @click="onClick">
</button>
</template>

<style>
#baekgol-window-button {
  position: absolute;
  top: 430px;
  left: 80px;
  width: 150px;
  height: 150px;
  background-color: rgba(255, 0, 0, 0.5);
  background-color: rgba(255, 0, 0, 0);
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
