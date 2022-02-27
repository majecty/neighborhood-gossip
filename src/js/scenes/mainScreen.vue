<script>
import {screen} from "../data/screen.js";
import {background} from "../data/background.js";
import PrologScreen from "./prologScreen.vue";
import StartScene from "./startScene.vue";
/*import EmptyScreen from "./emptyScreen.vue";*/
import BaekgolScreen from "./baekgolScreen.vue";
import BongcheonladyScreen from "./bongcheonladyScreen.vue";
import BomiScreen from "./bomiScreen.vue";
import {SceneNames} from "./common";

export default {
  name: "MainScreen",
  created() {
    this.SceneNames = SceneNames;
  },
  components: {
    PrologScreen,
    StartScene,
    /*EmptyScreen,*/
    BaekgolScreen,
    BongcheonladyScreen,
    BomiScreen,
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
  <PrologScreen v-if="screen.screen === SceneNames.PrologScreen" />
  <StartScene v-if="screen.screen === SceneNames.MainStreet"/>
  <!-- EmptyScreen v-if="screen.screen !== SceneNames.MainStreet"
    class="w-full h-full"
  /-->
  <BaekgolScreen v-if="screen.screen === SceneNames.BaekgolStreet"
    @back="back" />
  <BongcheonladyScreen v-if="screen.screen === SceneNames.BongcheonladyStreet"
    @back="back" />
  <BomiScreen v-if="screen.screen === SceneNames.BomiStreet"
    @back="back" />
</template>
