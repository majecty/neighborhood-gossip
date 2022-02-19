<script>
import {startSceneData} from "./data";

export default {
  name: "stairEnterButton",
  data() {
    return {
      startSceneData
    };
  },
};

</script>

<template>
<button class="stair-enter-button interactive-button"
    v-on:click="this.onClick('stair')"
  />
</template>
