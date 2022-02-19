<script>
import { screen } from "../data/screen";
import { background } from "../data/background";
import {sound} from "../sound";

export default {
  name: "EmptyScreen",
  data() {
    return {
      screen,
      background,
    };
  },
  mounted() {
    sound.play("second");
    console.log("play second");
  },
  unmounted() {
    sound.stop("second");
  },
  methods: {
    onClick() {
      this.screen.setScreen("start");
      this.background.setBackground(this.screen.screen);
    }
  },
};
</script>

<template>
<div v-on:click="this.onClick">
</div>
</template>
