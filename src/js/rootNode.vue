<script>
import ScreenParent from "./screenParent.vue";
import ScreenInner from "./screenInner.vue";
import MainScreen from "./scenes/mainScreen.vue";

export default  {
  name: 'RootNode',
  components: {
    ScreenParent,
    ScreenInner,
    MainScreen,
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
