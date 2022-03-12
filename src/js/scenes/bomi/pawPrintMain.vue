<script>
import RightButton from "../common/rightButton.vue";

export default {
  name: "PawPrintMain",
  emits: ["next"],
  components: {
    RightButton,
  },
};
</script>

<template>
<div id="paw-print" class="absolute">
</div>
<RightButton @next="$emit('next')"/>
</template>

<style>
#paw-print {
  background-image: url("/img/bomi/paw_print_photo.jpg");
  background-size: 1276px 1701px;
  width: 1276px;
  height: 1701px;
  transform: scale(0.4);
  transform-origin: top left;
  transform-origin: center;
  top: calc(50% - 825px);
  left: calc(50% - 638px);
}
</style>
