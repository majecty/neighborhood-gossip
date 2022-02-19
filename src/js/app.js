// import Alpine from "alpinejs";
import ScreenParent from "./screenParent";
import ScreenInner from "./screenInner";
//import Vue from "vue";
import {createApp} from "vue";

// window.Alpine = Alpine;
// Alpine.start();

// document.addEventListener("alpine:init", () => {
// console.log("in alpine:init");
// Alpine.data("screenInnerX", screenInner);
// Alpine.data("screenParent", () => ({
// init() {},
// }));
// });


createApp({
  components: {
    ScreenParent,
    ScreenInner,
  },
}).mount("#app");
