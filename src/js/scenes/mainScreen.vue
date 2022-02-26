<script>
import {screen} from "../data/screen.js";
import {background} from "../data/background.js";
import StartScene from "./startScene.vue";
/*import EmptyScreen from "./emptyScreen.vue";*/
import BaekgolScreen from "./baekgolScreen.vue";
import BongcheonladyScreen from "./bongcheonladyScreen.vue";
import {SceneNames} from "./common";

export default {
  name: "MainScreen",
  created() {
    this.SceneNames = SceneNames;
  },
  components: {
    StartScene,
    /*EmptyScreen,*/
    BaekgolScreen,
    BongcheonladyScreen,
  },
  data() {
    return {
      screen,
      background,
    }
  },
  methods: {
    back() {
      this.screen.setScreen(SceneNames.MainStreet);
      this.background.setBackground(SceneNames.MainStreet);
    },
  },
}
</script>

<template>
  <StartScene v-if="screen.screen === SceneNames.MainStreet"/>
  <!-- EmptyScreen v-if="screen.screen !== SceneNames.MainStreet"
    class="w-full h-full"
  /-->
  <BaekgolScreen v-if="screen.screen === SceneNames.BaekgolStreet"
    @back="back" />
  <BongcheonladyScreen v-if="screen.screen === SceneNames.BongcheonladyStreet"
    @back="back" />
</template>
