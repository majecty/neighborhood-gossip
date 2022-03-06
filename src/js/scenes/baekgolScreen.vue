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
    onClick(state) {
      this.state = state;
    },
    back() {
      switch (this.state) {
        case BaekgolState.Diary:
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
