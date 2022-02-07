// import Alpine from "alpinejs";
import ScreenInner from "./screenInner";

// window.Alpine = Alpine;
// Alpine.start();

// document.addEventListener("alpine:init", () => {
// console.log("in alpine:init");
// Alpine.data("screenInnerX", screenInner);
// Alpine.data("screenParent", () => ({
// init() {},
// }));
// });

Vue.createApp({
  components: {
    ScreenInner,
  },
}).mount("#app");
