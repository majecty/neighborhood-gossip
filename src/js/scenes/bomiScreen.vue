<script>
import PawPrintButton from "./bomi/pawPrintButton.vue";
import PawPrintMain from "./bomi/pawPrintMain.vue";
import BomiSpottedButton from "./bomi/bomiSpottedButton.vue";
import BomiSpottedMain from "./bomi/bomiSpottedMain.vue";
import { BomiState } from "./bomi/common";
import BackButton from "./common/backButton.vue";

export default {
  name: "BomiScreen",
  emits: ["back"],
  components: {
    PawPrintButton,
    PawPrintMain,
    BomiSpottedButton,
    BomiSpottedMain,
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

  <PawPrintMain v-if="state === BomiState.PawPrint"></PawPrintMain>
  <BomiSpottedMain v-if="state === BomiState.BomiSpotted"></BomiSpottedMain>

  <BackButton @back="back" />
</template>
