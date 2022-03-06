<script> 
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "PhoneBookMain",
  emits: [
    "click",
  ],
  components: {
    VisibleRegion,
  },
};
</script>

<template>
<div id="phone-book" class="absolute">
</div>
<VisibleRegion>
  <button id="phone-book-next-image" class="interactive-button"
    @click="$emit('click')">
  </button>
</VisibleRegion>
</template>

<style>
#phone-book {
  background-image: url("/img/bongcheonlady/phone_book.png");
  width: 1500px;
  height: 1150px;
  transform: scale(0.5);
  transform-origin: center;
  top: calc(50% - 1150px / 2);
  left: calc(50% - 1500px / 2);
}

#phone-book-next-image {
  background-image: url("/img/common/white_triangle_right.png");
  width: 23px;
  height: 105px;
  right: 20px;
  top: calc(50% - 105px / 2);
}
</style>
