// import Alpine from "alpinejs";
//import Vue from "vue";
import {createApp} from "vue";
import RootNode from "./rootNode.vue";

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
    RootNode,
  },
}).mount("#app");
