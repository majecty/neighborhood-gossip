<script>
import PawPrintButton from "./bomi/pawPrintButton.vue";
import PawPrintMain from "./bomi/pawPrintMain.vue";
import { BomiState } from "./bomi/common";
import BackButton from "./common/backButton.vue";

export default {
  name: "BomiScreen",
  emits: ["back"],
  components: {
    PawPrintButton,
    PawPrintMain,
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

  <PawPrintMain v-if="state === BomiState.PawPrint"></PawPrintMain>

  <BackButton @back="back" />
</template>
