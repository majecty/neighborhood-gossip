<script>
import BackButton from "./common/backButton.vue";
import { infoPageText } from "../misc/infoPageText";
import VisibleRegion from "./visibleRegion.vue";

export default {
  name: "InfoPage",
  emits: ["back"],
  components: {
    BackButton,
    VisibleRegion,
  },
  created() {
    /*this.text = infoPageText.replace(/(?:\r\n|\r|\n)/g, "<br />");*/
    this.text = infoPageText;
  },
  methods: {
    back() {
      this.$emit("back");
    },
  },
};
</script>

<template>
  <VisibleRegion>
    <div id="info-page-text" v-html="text">
    </div>
  </VisibleRegion>
  <BackButton @back="back" />
</template>

<style>
#info-page-text {
  text-align: center;
  color: white;
  white-space: pre;
  top: 100px;
  bottom: 10px;
  position: absolute;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.info-page-text-title {
  font-family: "Hahmlet-Bold";
  font-size: 30px;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
#info-page-text::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#info-page-text {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 

#info-page-poster {
  background-image: url("/img/common/poster.png");
  aspect-ratio: 2126/3005;
  flex-shrink: 0;
  width: 90%;
  margin-left: 5%;
  background-size: 100%;
  margin-bottom: 100px;
  /*width: 2126px;*/
	/*height: 3005px;*/
  /*transform-origin: center;*/
  /*transform: scale(0.23);*/
}

</style>
