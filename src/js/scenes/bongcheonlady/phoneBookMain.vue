<script> 
import VisibleRegion from "../visibleRegion.vue";
import LeftButton from "../common/leftButton.vue";
import RightButton from "../common/rightButton.vue";

export default {
  name: "PhoneBookMain",
  emits: [
    "back",
    "next",
  ],
  components: {
    VisibleRegion,
    RightButton,
  },
};
</script>

<template>
<div id="phone-book" class="absolute">
</div>
<LeftButton @back="$emit('back')" />
<RightButton @next="$emit('next')" />
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
