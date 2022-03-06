<script>
export default {
  name: "HandPrintsMain",
};
</script>

<template>
<div id="hand-print" class="absolute">
</div>
</template>

<style>
#hand-print {
  background-image: url("/img/bongcheonlady/handprints_photo.jpg");
  width: 992px;
  height: 1323px;
  transform: scale(0.6);
  transform-origin: center;
  top: calc(50% - 1323px / 2);
  left: calc(50% - 992px / 2);
}
</style>
