<script>
import { sound } from "../sound";
import { screen } from "../data/screen";
import { background } from "../data/background";

export default {
  name: 'StartScene',
  data() {
    return {
      screen,
      background
    };
  },
  methods: {
    onClick(clicked) {
      switch (clicked) {
        case "left":
          this.screen.setScreen("left");
          this.background.setBackground(this.screen.screen);
          break;
        case "door":
          this.screen.setScreen("door");
          this.background.setBackground(this.screen.screen);
          break;
        case "stair":
          this.screen.setScreen("stair");
          this.background.setBackground(this.screen.screen);
          break;
      }
    },
  },
  mounted() {
    sound.play("start");
    console.log("play start");
  },
  unmounted() {
    sound.stop("start");
  },
}
</script>

<template>
<button class="left-enter-button interactive-button"
  v-on:click="this.onClick('left')"
/>
<button class="door-enter-button interactive-button"
  v-on:click="this.onClick('door')"
/>
<button class="stair-enter-button interactive-button"
  v-on:click="this.onClick('stair')"
/>
</template>
