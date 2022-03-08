<script>
import VisibleRegion from "../visibleRegion.vue"

export default {
  name: "BabymealTinInner",
  emits: [
    "back"
  ],
  components: {
    VisibleRegion
  },
};
</script>

<template>
<div id="babymeal-tin-inner">
</div>
<VisibleRegion>
  <button id="babymeal-tin-inner-prev" class="interactive-button" @click="$emit('back')" />
</VisibleRegion>
</template>

<style>
#babymeal-tin-inner {
  --width: 1134;
  --height: 1512;
  --ratio: 0.5;
  position: absolute;
  background-image: url(/img/bongcheonlady/babymeal_tin_inside.jpg);
  /*aspect-ratio: calc(var(--width)/var(--height));*/
  background-size: 100%;
  width: calc(1px * var(--width)*var(--ratio));
  height: calc(1px * var(--height)*var(--ratio));
  top: calc(50% - (1px * var(--height)*var(--ratio)/2));
  left: calc(50% - (1px * var(--width)*var(--ratio)/2));
}

#babymeal-tin-inner-prev {
  background-image: url("/img/common/white_triangle_left.png");
  width: 52px;
  height: 72px;
  background-size: 26px 36px;
  left: 40px;
  top: calc(50% - 18px);
}
</style>
