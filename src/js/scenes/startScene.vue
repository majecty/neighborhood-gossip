<script>
import { sound } from "../sound";
import { screen } from "../data/screen";
import { background } from "../data/background";
import {SceneNames} from "./common";
import VisibleRegion from "./visibleRegion.vue";

export default {
  name: 'StartScene',
  components: {
    VisibleRegion,
  },
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
          this.screen.setScreen(SceneNames.BaekgolStreet);
          this.background.setBackground(this.screen.screen);
          break;
        case "door":
          this.screen.setScreen(SceneNames.BongcheonladyStreet);
          this.background.setBackground(this.screen.screen);
          break;
        case "stair":
          this.screen.setScreen(SceneNames.BomiStreet);
          this.background.setBackground(this.screen.screen);
          break;
        case "info":
          this.screen.setScreen(SceneNames.InfoPage);
          this.background.setBackground(this.screen.screen);
          break;
      }
    },
  },
  mounted() {
    sound.play("start");
    console.log("play start");


    // change left and right
    // give top, bottom, left, right
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
<visible-region>
  <button class="stair-enter-button interactive-button"
      v-on:click="this.onClick('stair')"
    />
  <button class="info-enter-button interactive-button"
    v-on:click="this.onClick('info')"
  />
</visible-region>
</template>
