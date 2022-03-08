<script>
import VisibleRegion from "../visibleRegion.vue"

export default {
  name: "PhoneBookPhoto",
  emits: [
    "click",
  ],
  components: [
    VisibleRegion,
  ],
};
</script>

<template>
<div id="phone-book-photo" class="absolute">
</div>
<VisibleRegion>
  <button id="phone-book-prev-image" class="interactive-button"
    @click="$emit('click')">
  </button>
</VisibleRegion>
</template>

<style>
#phone-book-photo {
  --width: 720;
  --height: 960;
  --ratio: 0.7;

  background-image: url("/img/bongcheonlady/phone_book_photo.JPG");
  /*aspect-ratio: calc(var(--width) / var(--height));*/
  background-size: 100%;
  width: calc(1px * var(--width) * var(--ratio));
  height: calc(1px * var(--height) * var(--ratio));
  top: calc(50% - 1px * var(--height) * var(--ratio) / 2);
  left: calc(50% - 1px * var(--width) * var(--ratio) / 2);
}

#phone-book-prev-image {
  background-image: url("/img/common/white_triangle_left.png");
  width: 52px;
  height: 72px;
  background-size: 26px 36px;
  left: 40px;
  top: calc(50% - 18px);
}

</style>
