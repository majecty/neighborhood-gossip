<script>
export default {
  name: "BomiLogMain",
};
</script>

<template>
<div id="bomi-log" class="absolute">
</div>
</template>

<style>
#bomi-log {
  background-image: url("/img/bomi/bomi_log.png");
  width: 852px;
  height: 1303px;
  transform: scale(0.5);
  transform-origin: top left;
  transform-origin: center;
  top: calc(50% - 615px);
  left: calc(50% - 425px);
}
</style>
