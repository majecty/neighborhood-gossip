<script>
import NameTagButton from "./baekgol/nameTagButton.vue";
import NameTagMain from "./baekgol/nameTagMain.vue";
import { BaekgolState } from "./baekgol/common";

export default {
  name: "BaekgolScreen",
  components: {
    NameTagButton,
    NameTagMain,
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
  <NameTagButton v-if="state === BaekgolState.Idle"
    @click="onClick(BaekgolState.NameTagMain)"/>
  <div id="cancel-background" v-if="state !== BaekgolState.Idle"
    class="absolute w-full h-full top-0"
    @click="onClick(BaekgolState.Idle)"></div>
  <NameTagMain v-if="state === BaekgolState.NameTagMain"/>
</template>
