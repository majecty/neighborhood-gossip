<script>
import { sampleText } from "../../misc/sampleText";

export default {
  name: "DiaryMain",
  created() {
    this.sampleText = sampleText.replace(/(?:\r\n|\r|\n)/g, '<br />');
  },
};
</script>

<template>
<div id="diary" class="absolute">
  <div id="diary-scrollable" class="absolute">
    <p id="diary-text" v-html="sampleText">
    </p>
  </div>
</div>
</template>

<style>
#diary {
  background-image: url("/img/baekgol/baekgol_diary.png");
  width: 2987px;
  height: 2128px;
  scale: 0.2;
  transform-origin: top left;
  top: 500px;
  left: 60px;
}

#diary-scrollable {
  left: 200px;
  right: 100px;
  bottom: 100px;
  top: 100px;
  overflow-y: scroll;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
#diary-scrollable::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#diary-scrollable {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 

#diary-text {
  font-size: 64px;
}
</style>
