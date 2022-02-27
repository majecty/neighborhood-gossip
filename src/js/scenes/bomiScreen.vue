<script>
import { BomiState } from "./bomi/common";
import BackButton from "./common/backButton.vue";

export default {
  name: "BomiScreen",
  emits: ["back"],
  components: {
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
        case BomiState.Idle:
          this.$emit("back");
          break;
      }
    },
  },
};
</script>

<template>
  <BackButton @back="back" />
</template>
