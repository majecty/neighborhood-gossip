<script>
import VisibleRegion from "../visibleRegion.vue"
import LeftButton from "../common/leftButton.vue";

export default {
  name: "BabymealTinInner2",
  emits: [
    "back",
  ],
  components: {
    VisibleRegion,
    LeftButton,
  },
};
</script>

<template>
<div id="babymeal-tin-inner-2">
</div>
<LeftButton @back="$emit('back')" />
</template>

<style>
#babymeal-tin-inner-2 {
  --width: 709;
  --height: 945;
  --ratio: 0.7;
  position: absolute;
  background-image: url(/img/bongcheonlady/babymeal_tin_inside_2.png);
  /*aspect-ratio: calc(var(--width)/var(--height));*/
  background-size: 100%;
  width: calc(1px * var(--width)*var(--ratio));
  height: calc(1px * var(--height)*var(--ratio));
  top: calc(50% - (1px * var(--height)*var(--ratio)/2));
  left: calc(50% - (1px * var(--width)*var(--ratio)/2));
}
</style>
