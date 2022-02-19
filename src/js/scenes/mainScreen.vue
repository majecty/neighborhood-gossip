<script>
import {screen} from "../data/screen.js"; 
import StartScene from "./startScene.vue";
import EmptyScreen from "./emptyScreen.vue";
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
    EmptyScreen,
    BaekgolScreen,
    BongcheonladyScreen,
  },
  data() {
    return {
      screen,
    }
  }
}
</script>

<template>
  <StartScene v-if="screen.screen === SceneNames.MainStreet"/>
  <EmptyScreen v-if="screen.screen !== SceneNames.MainStreet"
    class="w-full h-full"
  />
  <BaekgolScreen v-if="screen.screen === SceneNames.BaekgolStreet" />
  <BongcheonladyScreen v-if="screen.screen === SceneNames.BongcheonladyStreet" />
</template>
