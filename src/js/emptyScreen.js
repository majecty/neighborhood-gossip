import { sound } from "./sound";

export default EmptyScreen = {
  mounted() {
    sound.play("second");
    console.log("play second");
  },
  unmounted() {
    sound.stop("second");
  },
  template: `
    <div v-on:click="$emit('move-back')">
    </div>
    `,
};
