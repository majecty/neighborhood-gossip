<script>
import DiaryButton from "./baekgol/diaryButton.vue";
import DiaryMain from "./baekgol/diaryMain.vue";
import { BaekgolState } from "./baekgol/common";

export default {
  name: "BaekgolScreen",
  components: {
    DiaryButton,
    DiaryMain,
  },
  created() {
    this.BaekgolState = BaekgolState;
  },
  data() {
    return {
      state: BaekgolState.Idle
    };
  },
  methods: {
    onClick(state) {
      this.state = state;
    },
  }
};
</script>

<template>
  <DiaryButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.Diary)"/>
  <div id="cancel-background" v-if="state !== BaekgolState.Idle"
    class="absolute w-full h-full top-0"
    @click="onClick(BaekgolState.Idle)"></div>
  <DiaryMain v-if="state === BaekgolState.Diary"/>
</template>
