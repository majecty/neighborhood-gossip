<script>
import BackButton from "./common/backButton.vue";

export default {
  name: "InfoPage",
  emits: ["back"],
  components: {
    BackButton,
  },
  methods: {
    back() {
      this.$emit("back");
    },
  },
};
</script>

<template>
  <BackButton @back="back" />
</template>
