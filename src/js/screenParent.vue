<script>
import {background} from "./data/background";

export default {
  name: "ScreenParent",
  data() {
    return {
      background,
    };
  },
};
</script>

<template>
<div class="jh-screen" :class="[background.css]">
  <slot></slot>
</div>
</template>
