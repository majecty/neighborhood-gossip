<script>
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "BabymealTinMain",
  emits: [
    "next"
  ],
  components: {
    VisibleRegion,
  }
};
</script>

<template>
<div id="babymeal-tin" >
</div>
<VisibleRegion>
  <button id="babymeal-tin-next" class="interactive-button"
    @click="$emit('next')"
  />
</VisibleRegion>
</template>

<style>
#babymeal-tin {
  position: absolute;
  background-image: url(/img/bongcheonlady/babymeal_tin.png);
  width: 567px;
  height: 655px;
  transform-origin: center;
  top: calc(50% - 655px / 2);
  left: calc(50% - 567px / 2);
}

#babymeal-tin-next {
  background-image: url("/img/common/white_triangle_right.png");
  width: 23px;
  height: 105px;
  right: 20px;
  top: calc(50% - 105px / 2);
}
</style>
