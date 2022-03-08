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
    // info 페이지 갈 때에는 unmount되어도 sound가 멈추지 않는다.
    // 더 잘 만들 수 있지만 일단은 이렇게 해둠.
    this.movingToInfo = false;
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
          sound.play("transition");
          break;
        case "door":
          this.screen.setScreen(SceneNames.BongcheonladyStreet);
          this.background.setBackground(this.screen.screen);
          sound.play("transition");
          sound.stop("main");
          break;
        case "stair":
          this.screen.setScreen(SceneNames.BomiStreet);
          this.background.setBackground(this.screen.screen);
          sound.stop("main");
          sound.play("transition");
          break;
        case "info":
          this.screen.setScreen(SceneNames.InfoPage);
          this.background.setBackground(this.screen.screen);
          this.movingToInfo = true;
          break;
      }
    },
  },
  mounted() {
    this.mounted = true;
    this.movingToInfo = false;
    /*this.showIdle = true;*/
    setTimeout(() => {
      if (this.mounted) {
        sound.play("main");
      }
    }, 3000);
    setTimeout(() => {
      this.showIdle = true;
    }, 20 * 1000);
  },
  unmounted() {
    this.mounted = false;
    if (!this.movingToInfo) {
      sound.stop("main");
    }
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
