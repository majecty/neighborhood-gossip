<script>
export default {
  name: "NameTagMain",
};
</script>

<template>
<div id="name-tag" class="absolute">
</div>
</template>

<style>
#name-tag {
  background-image: url("/img/bongcheonlady/name_tag_photo.jpg");
  width: 850px;
  height: 1134px;
  transform: scale(0.65);
  transform-origin: center;
  /*top: 420px;*/
  /*left: 60px;*/
  top: calc(50% - 575px);
  left: calc(50% - 425px);
}
</style>
