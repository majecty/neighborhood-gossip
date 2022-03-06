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
  width: 702px;
  height: 1597px;
  transform: scale(0.7);
  transform-origin: center;
  top: calc(50% - 1597px / 2);
  left: calc(50% - 702px / 2);
  /*transform-origin: top left;*/
  /*top: 200px;*/
  /*left: 130px;*/
}
</style>
