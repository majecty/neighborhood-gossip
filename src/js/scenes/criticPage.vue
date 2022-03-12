<script>
import BackButton from "./common/backButton.vue";
import VisibleRegion from "./visibleRegion.vue";
import {criticTitle, criticDescription} from "../misc/criticText";

export default {
  nmae: "CriticPage",
  emits: ["back"],
  components: {
    VisibleRegion,
    BackButton,
  },
  created() {
    this.criticTitle = criticTitle;
    this.criticDescription = criticDescription;
  },
};
</script>

<template>
<VisibleRegion>
  <div class="critic-background">
    <div class="critic-text-region">
      <div class="critic-title">
      </div>
      <div class="critic-body" v-html="criticDescription">
      </div>
    </div>
  </div>
  <div id="diary-upper-arrow">
  </div>
  <div id="diary-down-arrow">
  </div>
</VisibleRegion>
<BackButton @back="$emit('back')"/>
</template>

<style>
.critic-background {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  color: white;
  white-space: pre-wrap;
  font-size: 20px;
  position: relative;
}

.critic-text-region {
  margin: 60px;
  overflow-y: scroll;
  position: absolute;
  top: 100px;
  bottom: 50px;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
.critic-tet-region::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.critic-text-region {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


.critic-title {
  --width: 326;
  --height: 43;
  --ratio: 1.7;
  background-image: url(/img/mainStreet/title.png);
  width: calc(1px * var(--width) * var(--ratio));
  height: calc(1px * var(--height) * var(--ratio));
  background-size: 100%;
}

.critic-body {
  font-family: "NanumSquare";
}

.from-right-description {
  text-align: right;
  width: 100%;
}


#critic-upper-arrow {
  background-image: url("/img/common/white_triangle_up.png");
  position: absolute;
  width: 26px;
  height: 36px;
  top: 30px;
  right: 20px;
}

#critic-down-arrow {
  background-image: url("/img/common/white_triangle_down.png");
  position: absolute;
  width: 26px;
  height: 36px;
  bottom: 30px;
  right: 20px;
}
</style>
