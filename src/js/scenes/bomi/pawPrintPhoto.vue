<script>
import LeftButton from "../common/leftButton.vue";

export default {
  name: "PawPrintPhoto",
  emits: ["back"],
  components: {
    LeftButton,
  },
};
</script>

<template>
<LeftButton @back="$emit('back')" />
<div id="paw-print-photo" class="absolute">
</div>
</template>

<style>
#paw-print-photo {
  --width: 567;
  --height: 756;
  --ratio: 1;
  background-image: url("/img/bomi/paw_print_photo_2.png");
  width: calc(1px * var(--width) * var(--ratio));
  height: calc(1px * var(--height) * var(--ratio));
  background-size: 100%;
  top: calc(50% - (1px * var(--height) * var(--ratio)) / 2);
  left: calc(50% - (1px * var(--width) * var(--ratio)) / 2);
}
</style>
