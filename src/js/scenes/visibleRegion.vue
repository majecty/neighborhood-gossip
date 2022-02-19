<script>
export default {
  name: "VisibleRegion",
  created() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      const width = document.body.clientWidth;
      const height = window.innerHeight;
      if (width / height > 3 / 4) {
        // height is minimum
        // 720 is full width
        this.$el.style.top = `${(1388 - 960) / 2}px`;
        this.$el.style.left = `0px`;
        this.$el.style.width = `720px`;
        this.$el.style.height = `960px`;
      } else if (width / height > 720 / 1388) {
        // width is 100%
        const visibleHeight = (720 * height) / width;

        this.$el.style.top = `${(1388 - visibleHeight) / 2}px`;
        this.$el.style.left = `0px`;
        this.$el.style.width = `720px`;
        this.$el.style.height = `${visibleHeight}px`;
      } else if (width / height > 6 / 13) {
        console.log("height is full");
        // height is 100%;
        const totalWidth = 720;
        const visibleWidth = (1388 * width) / height;

        this.$el.style.top = `0px`;
        this.$el.style.left = `${(720 - visibleWidth) / 2}px`;
        this.$el.style.width = `${visibleWidth}px`;
        this.$el.style.height = `1388px`;
      } else {
        // width is minimum
        this.$el.style.top = `0px`;
        this.$el.style.left = `${(720 - 640) / 2}px`;
        this.$el.style.width = `640px`;
        this.$el.style.height = `1388px`;
      }
    },
  },
  mounted() {
    this.resize();
  },
}

</script>

<template>
<div class="absolute visible-region">
  <slot></slot>
</div>
</template>
