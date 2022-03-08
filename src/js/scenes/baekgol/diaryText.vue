<script>
import { baekgolDiaryText } from "../../misc/baekgolDiaryText";
import { sound } from "../../sound";

export default {
  name: "DiaryText",
  created() {
    this.baekgolDiaryText = baekgolDiaryText.replace(/(?:\r\n|\r|\n)/g, '<br />');
  },
  mounted() {
    sound.play("diary");
  }
};
</script>

<template>
<div id="diary-text-container" class="absolute">
  <div id="diary-scrollable" class="absolute">
    <p id="diary-text" v-html="baekgolDiaryText">
    </p>
  </div>
  <div id="diary-upper-arrow">
  </div>
  <div id="diary-down-arrow">
  </div>
</div>
</template>

<style>
/*<style scoped>*/
#diary-text-container {
  background: rgba(3, 3, 3, 0.7);
  left: 50px;
  right: 50px;
  top: 120px;
  bottom: 70px;
}

#diary-text-container #diary-scrollable {
  left: 50px;
  right: 50px;
  bottom: 60px;
  top: 30px;
  overflow-y: scroll;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
#diary-text-container #diary-scrollable::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#diary-text-container #diary-scrollable {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 

#diary-text-container #diary-text {
  font-size: 32px;
  color: white;
}

#diary-upper-arrow {
  background-image: url("/img/common/white_triangle_up.png");
  position: absolute;
  width: 26px;
  height: 36px;
  top: 30px;
  right: 20px;
}

#diary-down-arrow {
  background-image: url("/img/common/white_triangle_down.png");
  position: absolute;
  width: 26px;
  height: 36px;
  bottom: 30px;
  right: 20px;
}
</style>
