<script>

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

export default {
  name: "ScreeInner",
  created() {
    window.addEventListener("resize", this.resize);
    setTimeout(this.resize, 1000);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      console.log("screenInner init");

      const width = document.body.clientWidth;
      const height = window.innerHeight;
      let top = 0;
      let left = 0;
      let scale = 1;
      if (width / height > 3 / 4) {
        console.log("height is minimum");
        // height is minimum
        const screenWidth = height * (3 / 4);
        // 720 is full width
        scale = screenWidth / 720;
        console.log("scale", scale);
        const totalHeight = 1388;
        const visibleHeight = 960;
        top = -((totalHeight - visibleHeight) / 2) * scale;
      } else if (width / height > 720 / 1388) {
      // width is 100%
        console.log("width is full");
        scale = width / 720;
        const totalHeight = 1388;
        const visibleHeight = (720 * height) / width;
        top = -((totalHeight - visibleHeight) / 2) * scale;
      } else if (width / height > 6 / 13) {
        console.log("height is full");
        // height is 100%;
        scale = height / 1388;
        const totalWidth = 720;
        const visibleWidth = (1388 * width) / height;
        left = -((totalWidth - visibleWidth) / 2) * scale;
      } else {
      // width is minimum
        console.log("width is minimum");
        const screenHeight = (width * 13) / 6;
        scale = screenHeight / 1388;

        const totalWidth = 720;
        const visibleWidth = 640;
        left = -((totalWidth - visibleWidth) / 2) * scale;
      }

/*scale = scale * 0.7;*/
      this.$el.style.transform = `scale(${scale})`;
      this.$el.style.top = `${top}px`;
      this.$el.style.left = `${left}px`;
      console.log(JSON.stringify({
        width,
        height,
        scale,
        top,
        left,
      }));
    },
  },
  mounted() {
    this.resize();
  },
};

</script>

<template>
<div class="jh-screen-inner">
  <slot></slot>
</div>
</template>
