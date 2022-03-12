<script>
import {screen} from "../data/screen.js";
import {background} from "../data/background.js";
import PrologScreen from "./prologScreen.vue";
import StartScene from "./startScene.vue";
/*import EmptyScreen from "./emptyScreen.vue";*/
import BaekgolScreen from "./baekgolScreen.vue";
import BongcheonladyScreen from "./bongcheonladyScreen.vue";
import BomiScreen from "./bomiScreen.vue";
import InfoPage from "./infoPage.vue";
import CriticPage from "./criticPage.vue";
import {SceneNames} from "./common";
import { sound } from "../sound";

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
    InfoPage,
    CriticPage,
  },
  data() {
    return {
      screen,
      background,
    }
  },
  methods: {
    back(scene) {
      this.screen.setScreen(SceneNames.MainStreet);
      this.background.setBackground(SceneNames.MainStreet);
      if (scene !== 'info' && scene !== 'critic') {
        sound.play("transition");
      }
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
    @back="back('baekgol')" />
  <BongcheonladyScreen v-if="screen.screen === SceneNames.BongcheonladyStreet"
    @back="back('bongcheon')" />
  <BomiScreen v-if="screen.screen === SceneNames.BomiStreet"
    @back="back('bomi')" />
  <InfoPage v-if="screen.screen === SceneNames.InfoPage"
    @back="back('info')" />
  <CriticPage v-if="screen.screen === SceneNames.CriticPage"
    @back="back('critic')" />

</template>
