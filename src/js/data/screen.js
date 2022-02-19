import {reactive} from "vue";
import {SceneNames} from "../scenes/common";

export const screen = reactive({
  screen: SceneNames.MainStreet,

  setScreen(screen) {
    this.screen = screen;
  },

});
