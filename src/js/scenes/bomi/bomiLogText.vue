<script>
import { bomiLogText } from "../../misc/bomiLogText";
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "BomiLogText",
  components: {
    VisibleRegion,
  },
  created() {
    this.bomiLogText = bomiLogText.replace(/(?:\r\n|\r|\n)/g, "<br />");
  },
};
</script>

<template>
<VisibleRegion>
  <div id="bomi-log-text-container" class="absolute">
    <div id="bomi-log-scrollable" class="absolute">
      <p id="bomi-log-text" v-html="bomiLogText">
      </p>
    </div>
    <div id="bomi-log-upper-arrow">
    </div>
    <div id="bomi-log-down-arrow">
    </div>
  </div>
</VisibleRegion>
</template>

<style>
#bomi-log-text-container {
  background: rgba(3, 3, 3, 0.7);
  left: 50px;
  right: 50px;
  top: 120px;
  bottom: 70px;
  font-family: "NanumSquare", sans-serif;
}

#bomi-log-text-container #bomi-log-scrollable {
  left: 50px;
  right: 50px;
  bottom: 60px;
  top: 30px;
  overflow-y: scroll;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
#bomi-log-text-container #bomi-log-scrollable::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#bomi-log-text-container #bomi-log-scrollable {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 

#bomi-log-text-container #bomi-log-text {
  font-size: 32px;
  color: white;
}

#bomi-log-upper-arrow {
  background-image: url("/img/common/white_triangle_up.png");
  position: absolute;
  width: 26px;
  height: 36px;
  top: 30px;
  right: 20px;
}

#bomi-log-down-arrow {
  background-image: url("/img/common/white_triangle_down.png");
  position: absolute;
  width: 26px;
  height: 36px;
  bottom: 30px;
  right: 20px;
}
</style>
