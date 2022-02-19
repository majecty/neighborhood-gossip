import {reactive} from "vue";

export const urlQuery = reactive({
  data: {},
  screen: null,
  initialize() {
    // this.data.get();
    // this.data.has()
    this.data = new URLSearchParams(window.location.search);
    this.screen = this.data.get("screen");
  }
});