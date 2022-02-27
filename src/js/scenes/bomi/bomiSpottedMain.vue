<script>
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "BomiSpottedMain",
  components: {
    VisibleRegion,
  },
  mounted() {
    const elem = this.$refs.video;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
  },
};
</script>

<template>
<div id="bomi-spotted-black-screen">
</div>
<VisibleRegion>
  <video ref="video" id="bomi-spotted" class="absolute" controls autoplay>
    <source src="/img/bomi/Bomi_spotted_video.mov">
  </video>
</VisibleRegion>
</template>

<style>
#bomi-spotted-black-screen {
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
}

#bomi-spotted {
  width: 100%;
  height: 100%;
}
</style>
