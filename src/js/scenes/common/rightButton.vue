<script>
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "RightButton",
  emits: [
    "next"
  ],
  components: {
    VisibleRegion,
  },
};
</script>

<template>
<VisibleRegion>
  <button id="common-next-button" class="interactive-button"
    @click="$emit('next')"
  />
</VisibleRegion>
</template>

<style>
#common-next-button {
  background-image: url("/img/common/white_triangle_right.png");
  width: 23px;
  height: 105px;
  right: 20px;
  top: calc(50% - 105px / 2);
}
</style>
