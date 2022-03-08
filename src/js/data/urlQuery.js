import {reactive} from "vue";

export const urlQuery = reactive({
  data: {},
  screen: null,
  bomiState: null,
  baekgolState: null,
  initialize() {
    console.log("url query initialize");
    // this.data.get();
    // this.data.has()
    this.data = new URLSearchParams(window.location.search);
    this.screen = this.data.get("screen");
    this.bomiState = this.data.get("bomi");
    this.baekgolState = this.data.get("baekgol");
  }
});
