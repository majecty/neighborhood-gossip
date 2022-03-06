<script>
import {sound} from "../sound";
import VisibleRegion from "./visibleRegion.vue";
import DiaryButton from "./baekgol/diaryButton.vue";
import DiaryMain from "./baekgol/diaryMain.vue";
import DiaryText from "./baekgol/diaryText.vue";
import HealthInsuranceButton from "./baekgol/healthInsuranceButton.vue";
import HealthInsuranceMain from "./baekgol/healthInsuranceMain.vue";
import DaisoReceiptButton from "./baekgol/daisoReceiptButton.vue";
import DaisoReceiptMain from "./baekgol/daisoReceiptMain.vue";
import WindowButton from "./baekgol/window.vue";
import BackButton from "./common/backButton.vue";
import { BaekgolState } from "./baekgol/common";

export default {
  name: "BaekgolScreen",
  emits: ["back"],
  components: {
    VisibleRegion,
    DiaryButton,
    DiaryMain,
    DiaryText,
    HealthInsuranceButton,
    HealthInsuranceMain,
    DaisoReceiptButton,
    DaisoReceiptMain,
    BackButton,
    WindowButton,
  },
  created() {
    this.BaekgolState = BaekgolState;
  },
  data() {
    return {
      state: BaekgolState.Idle
    };
  },
  mounted() {
    sound.play("koongkoong2");
  },
  unmounted() {
    sound.stop("koongkoong2");
  },
  methods: {
    onClick(nextState) {
      const prevState = this.state;
      this.state = nextState;
      if (prevState === BaekgolState.Idle && nextState === BaekgolState.Diary) {
        sound.stop("koongkoong2");
        sound.play("baekgolDiary");
      }
      if (prevState === BaekgolState.Diary && nextState === BaekgolState.Idle) {
        sound.play("koongkoong2");
        sound.stop("baekgolDiary");
      }
    },
    back() {
      switch (this.state) {
        case BaekgolState.Diary:
          sound.play("koongkoong2");
          sound.stop("baekgolDiary");
          this.state = BaekgolState.Idle;
          break;
        case BaekgolState.DiaryText:
          this.state = BaekgolState.Diary;
          break;
        case BaekgolState.HealthInsurance:
          this.state = BaekgolState.Idle;
          break;
        case BaekgolState.DaisoReceipt:
          this.state = BaekgolState.Idle;
          break;
        default:
          this.$emit("back");
          break;
      }
    },
  }
};
</script>

<template>
  <WindowButton v-if="state === BaekgolState.Idle" />
  <DiaryButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.Diary)"/>
  <HealthInsuranceButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.HealthInsurance)" />
  <DaisoReceiptButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.DaisoReceipt)" />

  <DiaryMain v-if="state === BaekgolState.Diary"
    @click="onClick(BaekgolState.DiaryText)" />
  <VisibleRegion>
    <DiaryText v-if="state === BaekgolState.DiaryText"/>
  </VisibleRegion>
  <HealthInsuranceMain v-if="state === BaekgolState.HealthInsurance"/>
  <DaisoReceiptMain v-if="state === BaekgolState.DaisoReceipt"/>

  <BackButton @back="back"/>
</template>
