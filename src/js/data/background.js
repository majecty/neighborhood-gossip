import {reactive} from 'vue';

export const background = reactive({
  css: "img-1",

  setBackground(background) {
    this.css = this.backgroundToCSS(background);
  },

  backgroundToCSS(background) {
    switch (background) {
      case "start":
        return "img-1";
      case "left":
        return "img-2";
      case "door":
        return "img-3";
      case "stair":
        return "img-4";
    }
  }

});
