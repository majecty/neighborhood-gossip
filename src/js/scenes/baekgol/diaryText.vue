<script>
import { sampleText } from "../../misc/sampleText";
import { sound } from "../../sound";
import _ from "underscore";

export default {
  name: "DiaryText",
  created() {
    this.sampleText = sampleText.replace(/(?:\r\n|\r|\n)/g, '<br />');
    this.sound = sound;
    this.playScrollSound = _.debounce((event) => {
      const elem = event.target;
      const top = elem.scrollTop;
      const scrollHeight = elem.scrollHeight;
      const clientHeight = elem.clientHeight;
      const scrollRate = top / (scrollHeight - clientHeight);
      this.sound.diarySound.volume(0.3 + scrollRate * 0.7);
      this.sound.play("diary");
    }, 100);
  },
  methods: {
    handleScroll(event) {
      this.playScrollSound(event);
    },
  },
};
</script>

<template>
<div id="diary-text-container" class="absolute">
  <div id="diary-scrollable" class="absolute"
    v-on:scroll.native="handleScroll">
    <p id="diary-text" v-html="sampleText">
    </p>
  </div>
</div>
</template>

<style>
#diary-text-container {
  background: rgba(3, 3, 3, 0.7);
  left: 50px;
  right: 50px;
  top: 70px;
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
</style>
