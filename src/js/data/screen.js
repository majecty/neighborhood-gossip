import {reactive} from "vue";

export const screen = reactive({
  screen: "start",

  setScreen(screen) {
    this.screen = screen;
  },

});
