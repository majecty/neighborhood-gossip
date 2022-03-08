<script>
import { sound } from "../../sound";

export default {
  name: "BomiLogMain",
  created() {
   this.sound = sound;
  },
  mounted() {
    this.sound.play("diary");
  },
};
</script>

<template>
<div id="bomi-log" class="absolute">
  <div id="bomi-log-next">
  ✥ 더 읽으려면 일기장을 터치하세요.
  </div>
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

#bomi-log-next {
  position: absolute;
  font-size: 50px;
  color: white;
  text-decoration: underline;
  text-underline-position: under;
  text-align: center;
  width: 100%;
  bottom: -110px;
}
</style>
