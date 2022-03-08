<script>
export default {
  name: "PawPrintButton",
};
</script>

<template>
<button id="paw-print-button" class="interactive-button" />
</template>

<style>
#paw-print-button {
  --width: 1796;
  --height: 1652;
  --ratio: 0.03;
  background-image: url("/img/bomi/paw_print.png");
  aspect-ratio: calc(var(--width) / var(--height));
  width: calc(1px * var(--width) * var(--ratio));
  top: 1110px;
  left: 360px;
  background-size: 100%;
}
</style>
