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
  scale: 0.5;
  transform-origin: top left;
  top: 420px;
  left: 60px;
}

#phone-book-next-image {
  background-image: url("/img/common/next.png");
  width: 44px;
  height: 63px;
  right: 20px;
  top: 500px;
}
</style>
