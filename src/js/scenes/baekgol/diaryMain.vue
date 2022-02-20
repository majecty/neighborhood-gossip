<script>
import { sampleText } from "../../misc/sampleText";
import { sound } from "../../sound";
import _ from "underscore";

export default {
  name: "DiaryMain",
  created() {
    this.sampleText = sampleText.replace(/(?:\r\n|\r|\n)/g, '<br />');
    this.sound = sound;
    this.playScrollSound = _.throttle((event) => {
      const elem = event.target;
      const top = elem.scrollTop;
      const scrollHeight = elem.scrollHeight;
      const clientHeight = elem.clientHeight;
      const scrollRate = top / (scrollHeight - clientHeight);
      this.sound.diarySound.volume(0.3 + scrollRate * 0.7);
      this.sound.play("diary");
    }, 1000);
  },
  mounted() {
    this.sound.play("diary");
  },
  unmounted() {
    this.sound.stop("diary");
  },
  methods: {
    handleScroll(event) {
      this.playScrollSound(event);
    },
  },
};
</script>

<template>
<div id="diary" class="absolute">
  <div id="diary-scrollable" class="absolute" v-on:scroll.native="handleScroll">
    <p id="diary-text" v-html="sampleText" v-on:scroll.native="handleScroll">
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
