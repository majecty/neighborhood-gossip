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
  created() {
    this.mounted = false;
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
          sound.stop("main");
          break;
        case "door":
          this.screen.setScreen(SceneNames.BongcheonladyStreet);
          this.background.setBackground(this.screen.screen);
          sound.stop("main");
          break;
        case "stair":
          this.screen.setScreen(SceneNames.BomiStreet);
          this.background.setBackground(this.screen.screen);
          sound.stop("main");
          break;
        case "info":
          this.screen.setScreen(SceneNames.InfoPage);
          this.background.setBackground(this.screen.screen);
          break;
      }
    },
  },
  mounted() {
    this.mounted = true;
    setTimeout(() => {
      if (this.mounted) {
        sound.play("main");
      }
    }, 3000);
    setTimeout(() => {
      this.showIdle = true;
    }, 10 * 1000);
  },
  unmounted() {
    this.mounted = false;
  },
}
</script>

<template>

<button class="left-enter-button interactive-button"
  v-if="!showIdle"
  v-on:click="this.onClick('left')"
/>
<button class="door-enter-button interactive-button"
  v-if="!showIdle"
  v-on:click="this.onClick('door')"
/>
<button class="info-enter-button interactive-button"
  v-if="!showIdle"
  v-on:click="this.onClick('info')"
/>

<visible-region>
  <button class="stair-enter-button interactive-button"
      v-if="!showIdle"
      v-on:click="this.onClick('stair')"
    />
</visible-region>
<IdlePopup @back="showIdle=false" v-if="showIdle" />
</template>

<style>

.left-enter-button {
  background-image: url("/img/mainStreet/left-button.png");
  width: 544px;
  height: 353px;
  left: 200px;
  top: 730px;
  transform: scale(0.2);
  transform-origin: top left;
}

.door-enter-button {
  background-image: url("/img/mainStreet/door-button.png");
  width: 338px;
  height: 431px;
  top: 1000px;
  left: 306px;
  transform: scale(0.2);
  transform-origin: top left;
}

.stair-enter-button {
  background-image: url("/img/mainStreet/stair-button.png");
  width: 527px;
  height: 309px;
  bottom: 10px;
  left: 10px;
  transform: scale(0.3);
  transform-origin: bottom left;
}

.info-enter-button {
  background-image: url("/img/mainStreet/poster_mainstreet_icon.png");
  width: 591px;
  height: 835px;
  transform-origin: top left;
  top: 330px;
  left: 570px;
  transform: scale(0.1);
}
</style>
