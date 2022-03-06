<script>
export default {
  name: "HealthInsuranceMain",
};
</script>

<template>
<div id="health-insurance" class="absolute">
</div>
</template>

<style>
#health-insurance {
  background-image: url("/img/baekgol/health_insurance.png");
  width: 709px;
  height: 630px;
  transform: scale(0.8);
  transform-origin: center;
  /*transform-origin: top left;*/
  top: calc(50% - 630px / 2);
  left: calc(50% - 709px / 2);
}
</style>
