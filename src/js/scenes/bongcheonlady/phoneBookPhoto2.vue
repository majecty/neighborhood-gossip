<script>
import VisibleRegion from "../visibleRegion.vue"
import LeftButton from "../common/leftButton.vue";

export default {
  name: "PhoneBookPhoto2",
  emits: [
    "click",
    "back",
  ],
  components: {
    VisibleRegion,
    LeftButton,
  },
};
</script>

<template>
<LeftButton @back="$emit('back')" />
<div id="phone-book-photo2" class="absolute">
</div>
</template>

<style>
#phone-book-photo2 {
  --width: 709;
  --height: 945;
  --ratio: 0.7;

  background-image: url("/img/bongcheonlady/phone_book_photo_2.png");
  /*aspect-ratio: calc(var(--width) / var(--height));*/
  background-size: 100%;
  width: calc(1px * var(--width) * var(--ratio));
  height: calc(1px * var(--height) * var(--ratio));
  top: calc(50% - 1px * var(--height) * var(--ratio) / 2);
  left: calc(50% - 1px * var(--width) * var(--ratio) / 2);
}

</style>
