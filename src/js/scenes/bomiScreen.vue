<script>
import PawPrintButton from "./bomi/pawPrintButton.vue";
import PawPrintMain from "./bomi/pawPrintMain.vue";
import BomiSpottedButton from "./bomi/bomiSpottedButton.vue";
import BomiSpottedMain from "./bomi/bomiSpottedMain.vue";
import BomiLogButton from "./bomi/bomiLogButton.vue";
import BomiLogMain from "./bomi/bomiLogMain.vue";
import { BomiState } from "./bomi/common";
import BackButton from "./common/backButton.vue";
import { sound } from "../sound";

export default {
  name: "BomiScreen",
  emits: ["back"],
  components: {
    PawPrintButton,
    PawPrintMain,
    BomiSpottedButton,
    BomiSpottedMain,
    BomiLogButton,
    BomiLogMain,
    BackButton,
  },
  created() {
    this.BomiState = BomiState;
  },
  data() {
    return {
      state: BomiState.Idle
    };
  },
  mounted() {
    sound.play("second");
  },
  unmounted() {
    sound.stop("second");
  },
  methods: {
    back() {
      switch(this.state) {
        case BomiState.PawPrint:
          this.state = BomiState.Idle;
          break;
        case BomiState.BomiSpotted:
          this.state = BomiState.Idle;
          break;
        case BomiState.Idle:
          this.$emit("back");
          break;
      }
    },
  },
};
</script>

<template>
  <PawPrintButton v-if="state === BomiState.Idle" @click="state = BomiState.PawPrint"></PawPrintButton>
  <BomiSpottedButton v-if="state === BomiState.Idle" @click="state = BomiState.BomiSpotted"></BomiSpottedButton>
  <BomiLogButton v-if="state === BomiState.Idle" @click="state = BomiState.BomiLog"></BomiLogButton>

  <PawPrintMain v-if="state === BomiState.PawPrint"></PawPrintMain>
  <BomiSpottedMain v-if="state === BomiState.BomiSpotted"></BomiSpottedMain>
  <BomiLogMain v-if="state === BomiState.BomiLog"></BomiLogMain>

  <BackButton @back="back" />
</template>
