import { sound } from "../sound";

export default LeftScreen = {
  mounted() {},
  unmounted() {},
  template: `
    <div v-on:click="$emit('moveBack')">
    </div>
    `,
};
