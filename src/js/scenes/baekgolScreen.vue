<script>
import DiaryButton from "./baekgol/diaryButton.vue";
import DiaryMain from "./baekgol/diaryMain.vue";
import HealthInsuranceButton from "./baekgol/healthInsuranceButton.vue";
import HealthInsuranceMain from "./baekgol/healthInsuranceMain.vue";
import DaisoReceiptButton from "./baekgol/daisoReceiptButton.vue";
import DaisoReceiptMain from "./baekgol/daisoReceiptMain.vue";
import { BaekgolState } from "./baekgol/common";

export default {
  name: "BaekgolScreen",
  components: {
    DiaryButton,
    DiaryMain,
    HealthInsuranceButton,
    HealthInsuranceMain,
    DaisoReceiptButton,
    DaisoReceiptMain,
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
  <HealthInsuranceButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.HealthInsurance)" />
  <DaisoReceiptButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.DaisoReceipt)" />

  <div id="cancel-background" v-if="state !== BaekgolState.Idle"
    class="absolute w-full h-full top-0"
    @click="onClick(BaekgolState.Idle)"></div>

  <DiaryMain v-if="state === BaekgolState.Diary"/>
  <HealthInsuranceMain v-if="state === BaekgolState.HealthInsurance"/>
  <DaisoReceiptMain v-if="state === BaekgolState.DaisoReceipt"/>
</template>
