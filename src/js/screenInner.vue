<script>
export default {
  name: "ScreeInner",
  mounted() {
    console.log("screenInner init");

    const width = document.body.clientWidth;
    const height = window.innerHeight;
    if (width / height > 3 / 4) {
    console.log("height is minimum");
      // height is minimum
      const screenWidth = height * (3 / 4);
      // 720 is full width
      const scale = screenWidth / 720;
      this.$el.style.scale = scale;
      const totalHeight = 1388;
      const visibleHeight = 960;
      this.$el.style.top = `-${((totalHeight - visibleHeight) / 2) * scale}px`;
    } else if (width / height > 720 / 1388) {
    // width is 100%
    console.log("width is full");
      const scale = width / 720;
      this.$el.style.scale = scale;
      const totalHeight = 1388;
      const visibleHeight = (720 * height) / width;
      this.$el.style.top = `-${((totalHeight - visibleHeight) / 2) * scale}px`;
    } else if (width / height > 6 / 13) {
    console.log("height is full");
      // height is 100%;
      const scale = height / 1388;
      this.$el.style.scale = scale;
      const totalWidth = 720;
      const visibleWidth = (1388 * width) / height;
      this.$el.style.left = `-${((totalWidth - visibleWidth) / 2) * scale}px`;
    } else {
    // width is minimum
    console.log("width is minimum");
      const screenHeight = (width * 13) / 6;
      const scale = screenHeight / 1388;

      this.$el.style.scale = scale;
      const totalWidth = 720;
      const visibleWidth = 640;
      this.$el.style.left = `-${((totalWidth - visibleWidth) / 2) * scale}px`;
    }

    console.log(this.$refs);
    console.log(this);
  },
};

</script>

<template>
<div class="jh-screen-inner">
  <slot></slot>
</div>
</template>
