import {reactive} from 'vue';
import {BackgroundCSS, MainStreetCSS} from "../scenes/common";

export const background = reactive({
  css: MainStreetCSS,

  setBackground(background) {
    this.css = this.backgroundToCSS(background);
  },

  backgroundToCSS(background) {
    return BackgroundCSS[background];
  }
});
