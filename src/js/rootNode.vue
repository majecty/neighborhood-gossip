<script>
import ScreenParent from "./screenParent.vue";
import ScreenInner from "./screenInner.vue";
import MainScreen from "./scenes/mainScreen.vue";
import { background } from "./data/background";
import { screen } from "./data/screen";
import { urlQuery } from "./data/urlQuery";

export default {
  name: 'RootNode',
  components: {
    ScreenParent,
    ScreenInner,
    MainScreen,
  },
  data() {
    return {
      background,
      screen,
      urlQuery,
    };
  },
  mounted() {
    this.urlQuery.initialize();
    if (this.urlQuery.screen != null) {
      this.screen.setScreen(this.urlQuery.screen);
      this.background.setBackground(this.urlQuery.screen);
    }
  },
}

</script>

<template>
<ScreenParent>
  <ScreenInner>
    <MainScreen>
    </MainScreen>
  </ScreenInner>
</ScreenParent>
</template>
