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
  transform: scale(1);
  transform-origin: top left;
  top: 220px;
  left: 0px;
}

#phone-book-prev-image {
  background-image: url("/img/common/prev.png");
  width: 44px;
  height: 63px;
  left: 40px;
  top: 700px;
}

</style>
