<script>
import { sound } from "../sound";

export default {
  name: 'StartScene',
  mounted() {
    sound.play("start");
    console.log("play start");
  },
  unmounted() {
    sound.stop("start");
  },
}
</script>

<template>
startscene
<button class="left-enter-button interactive-button"
  v-on:click="$emit('left-enter-button-clicked')"
/>
<button class="door-enter-button interactive-button"
  v-on:click="$emit('door-enter-button-clicked')"
/>
<button class="stair-enter-button interactive-button"
  v-on:click="$emit('stair-enter-button-clicked')"
/>
</template>
