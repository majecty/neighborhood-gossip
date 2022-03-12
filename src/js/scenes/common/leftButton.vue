<script>
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "LeftButton",
  emits: [
    "back",
  ],
  components: {
    VisibleRegion,
  },
};
</script>

<template>
<VisibleRegion>
  <button id="common-prev-button" class="interactive-button"
    @click="$emit('back')"
  />
</VisibleRegion>
</template>

<style>
#common-prev-button {
  background-image: url("/img/common/white_triangle_left.png");
  width: 52px;
  height: 72px;
  background-size: 26px 36px;
  left: 40px;
  top: calc(50% - 18px);
}
</style>
