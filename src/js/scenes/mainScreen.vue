<script>
import {screen} from "../data/screen.js"; 
import StartScene from "./startScene.vue";
import EmptyScreen from "./emptyScreen.vue";

export default {
  name: "MainScreen",
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
  <StartScene v-if="screen.screen === 'start'"
    v-on:left-enter-button-clicked="$emit('left-enter-button-clicked')"
    v-on:door-enter-button-clicked="$emit('door-enter-button-clicked')"
    v-on:stair-enter-button-clicked="$emit('stair-enter-button-clicked')"
  />
  <EmptyScreen v-if="screen.screen !== 'start'"
    class="w-full h-full"
    v-on:move-back="$emit('move-back')"
  />
</template>
