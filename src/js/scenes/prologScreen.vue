<script>
import {screen} from "../data/screen.js";
import { background } from "../data/background";
import {SceneNames} from "./common";
import VisibleRegion from "./visibleRegion.vue";

export default {
  name: "PrologScreen",
  components: {
    VisibleRegion,
  },
  data() {
    return {
      screen,
      background,
    };
  },
  methods: {
    click() {
      this.screen.setScreen(SceneNames.MainStreet);
      this.background.setBackground(this.screen.screen);
    },
  },
};
</script>

<template>
  <div id="prolog-screen-black-screen">
  </div>
  <VisibleRegion>
		<div id="prolog-screen-poster-image" class="absolute" >
		</div>
    <button id="prolog-screen-enter-button"
      @click="click"
      class="interactive-button">
    </button>
    <div id="prolog-screen-description" class="absolute">
      ✥입장 후 사운드가 재생됩니다✥
    </div>
  </VisibleRegion>
</template>

<style>
#prolog-screen-poster-image {
  --width: 510;
  --height: 721;
  --ratio: 1;
  width: calc(1px * var(--width) * var(--ratio));
  height: calc(1px * var(--height) * var(--ratio));
  background-size: 100%;
  left: calc(50% - calc(1px * var(--width) * var(--ratio)) / 2);
	background-image: url("/img/common/poster.png");
  top: calc(50% - calc(1px * var(--height) * var(--ratio)) / 2 - 100px);
}

#prolog-screen-black-screen {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

#prolog-screen-enter-button {
  background-image: url("/img/prolog/enter.png");
  width: 311px;
  height: 122px;
  transform: scale(0.4);
  transform-origin: center;
  left: calc(50% - (311px / 2));
  top: calc(50% + 250px);
}

#prolog-screen-description {
  font-family: "NanumSquare";
  width: 100%;
  font-size: 25px;
  color: white;
  text-align: center;
  top: calc(50% + 370px);
}
</style>
