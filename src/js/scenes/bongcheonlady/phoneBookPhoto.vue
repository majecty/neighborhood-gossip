<script>
import VisibleRegion from "../visibleRegion.vue"
import LeftButton from "../common/leftButton.vue";
import RightButton from "../common/rightButton.vue";

export default {
  name: "PhoneBookPhoto",
  emits: [
    "next",
    "back"
  ],
  components: {
    VisibleRegion,
    LeftButton,
    RightButton,
  },
};
</script>

<template>
<div id="phone-book-photo" class="absolute">
</div>
<LeftButton @back="$emit('back')" ></LeftButton>
<RightButton @next="$emit('next')" />
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
</style>
