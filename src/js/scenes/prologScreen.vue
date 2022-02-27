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
    <button id="prolog-screen-enter-button"
      @click="click"
      class="interactive-button">
    </button>
  </VisibleRegion>
</template>

<style>
#prolog-screen-black-screen {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

#prolog-screen-enter-button {
  background-image: url("/img/prolog/enter.png");
  width: 311px;
  height: 122px;
  scale: 0.5;
  transform-origin: top left;
  /*top: 1200px;*/
  bottom: 100px;
  left: calc(50% - (311px / 4));
}
</style>
