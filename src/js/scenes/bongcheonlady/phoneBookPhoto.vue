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
  background-image: url("/img/bongcheonlady/phone_book_photo.JPG");
  width: 720px;
  height: 960px;
  transform: scale(0.7);
  transform-origin: center;
  top: calc(50% - 480px);
  left: calc(50% - 360px);
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
