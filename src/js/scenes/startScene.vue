<script>
import { sound } from "../sound";
import { screen } from "../data/screen";
import { background } from "../data/background";
import {SceneNames} from "./common";
import VisibleRegion from "./visibleRegion.vue";
import IdlePopup from "./startScene/idlePopup.vue";

export default {
  name: 'StartScene',
  components: {
    VisibleRegion,
    IdlePopup,
  },
  data() {
    return {
      screen,
      background,
      showIdle: false
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
    setTimeout(() => {
      this.showIdle = true;
    }, 3000);

    // start timeout
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
<IdlePopup @back="showIdle=false" v-if="showIdle" />
</template>
