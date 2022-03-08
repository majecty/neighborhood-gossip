<script>
import PawPrintButton from "./bomi/pawPrintButton.vue";
import PawPrintMain from "./bomi/pawPrintMain.vue";
import BomiSpottedButton from "./bomi/bomiSpottedButton.vue";
import BomiSpottedMain from "./bomi/bomiSpottedMain.vue";
import BomiLogButton from "./bomi/bomiLogButton.vue";
import BomiLogMain from "./bomi/bomiLogMain.vue";
import BomiLogText from "./bomi/bomiLogText.vue";
import { BomiState, parseBomiState } from "./bomi/common";
import BackButton from "./common/backButton.vue";
import { sound } from "../sound";
import { urlQuery } from "../data/urlQuery";

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
    BomiLogText,
    BackButton,
  },
  created() {
    this.BomiState = BomiState;
  },
  data() {
    return {
      state: BomiState.Idle,
      urlQuery,
    };
  },
  mounted() {
    sound.play("koongkoong");
    if (this.urlQuery.bomiState) {
      this.state = parseBomiState(this.urlQuery.bomiState);
    }
  },
  unmounted() {
    sound.stop("koongkoong");
    sound.stop("bomiLog");
  },
  methods: {
    onClick(nextState) {
      const prevState = this.state;
      this.state = nextState;

      if (prevState === BomiState.Idle && nextState === BomiState.BomiLog) {
        sound.play("diary");
        sound.stop("koongkoong");
        sound.play("bomiLog");
      } else if (prevState === BomiState.BomiLog && nextState === BomiState.BomiLogText) {
        sound.play("diary");
      } else if (prevState === BomiState.BomiLog && nextState === BomiState.Idle) {
        sound.stop("bomiLog");
        sound.play("koongkoong");
      }
    },
    back() {
      switch(this.state) {
        case BomiState.PawPrint:
          this.state = BomiState.Idle;
          break;
        case BomiState.BomiSpotted:
          this.state = BomiState.Idle;
          break;
        case BomiState.BomiLog:
          this.state = BomiState.Idle;
          break;
        case BomiState.BomiLogText:
          this.state = BomiState.BomiLog;
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
  <PawPrintButton v-if="state === BomiState.Idle" @click="onClick(BomiState.PawPrint)"></PawPrintButton>
  <BomiSpottedButton v-if="state === BomiState.Idle" @click="onClick(BomiState.BomiSpotted)"></BomiSpottedButton>
  <BomiLogButton v-if="state === BomiState.Idle" @click="onClick(BomiState.BomiLog)"></BomiLogButton>

  <PawPrintMain v-if="state === BomiState.PawPrint"></PawPrintMain>
  <BomiSpottedMain v-if="state === BomiState.BomiSpotted"></BomiSpottedMain>
  <BomiLogMain v-if="state === BomiState.BomiLog"
    @click="onClick(BomiState.BomiLogText)" ></BomiLogMain>

  <BomiLogText v-if="state === BomiState.BomiLogText"></BomiLogText>

  <BackButton @back="back" />
</template>
