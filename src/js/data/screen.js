import {reactive} from "vue";
import {SceneNames} from "../scenes/common";

export const screen = reactive({
  screen: SceneNames.PrologScreen,

  setScreen(screen) {
    this.screen = screen;
  },

});
