import ScreenInner from "./screenInner";

export default ScreenParent = {
  components: {
    ScreenInner,
  },
  data() {
    return {
      screen: "start",
    };
  },
  methods: {
    updateScreen(name) {
      this.screen = name;
    },
  },
  computed: {
    backgroundImage() {
      switch (this.screen) {
        case "start":
          return "img-1";
        case "left":
          return "img-2";
        case "door":
          return "img-3";
        case "stair":
          return "img-4";
      }
    },
  },
  template: `
  <div class="jh-screen" :class="[backgroundImage]">
    <ScreenInner :screen="screen"
      v-on:left-enter-button-clicked="updateScreen('left')"
      v-on:door-enter-button-clicked="updateScreen('door')"
      v-on:stair-enter-button-clicked="updateScreen('stair')"
      v-on:move-back="updateScreen('start')"
    />
  </div>
    `,
};
