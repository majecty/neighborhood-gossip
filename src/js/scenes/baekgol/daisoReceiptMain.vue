<script>
export default {
  name: "DaisoReceiptMain",
};
</script>

<template>
<div id="daiso-receipt" class="absolute">
</div>
</template>

<style>
#daiso-receipt {
  background-image: url("/img/baekgol/daiso_receipt.png");
  width: 510px;
  height: 1161px;
  /*transform: scale(0.7);*/
  transform-origin: center;
  top: calc(50% - 1161px / 2);
  left: calc(50% - 510px / 2);
  /*transform-origin: top left;*/
  /*top: 200px;*/
  /*left: 130px;*/
}
</style>
