<script>
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "BackButton",
  components: {
    VisibleRegion,
  },
  emits: ["back"],
};
</script>

<template>
<VisibleRegion>
  <button id="back-button" class="interactive-button"
    @click="$emit('back')"/>
</VisibleRegion>
</template>

<style>
#back-button {
  background-image: url("/img/common/back.png");
  width: 493px;
  height: 290px;
  scale: 0.3;
  transform-origin: top left;
  top: 50px;
  left: 50px;
};

</style>
