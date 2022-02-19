<script>
import {screen} from "../data/screen.js"; 
import StartScene from "./startScene.vue";
import EmptyScreen from "./emptyScreen.vue";
import {SceneNames} from "./common";

export default {
  name: "MainScreen",
  created() {
    this.SceneNames = SceneNames;
  },
  components: {
    StartScene,
    EmptyScreen,
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
</template>
