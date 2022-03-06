<script>
import VisibleRegion from "../visibleRegion.vue";

export default {
  name: "IdlePopup",
  emits: [
    "back",
  ],
  components: {
    VisibleRegion,
  },
};
</script>

<template>
<div id="idle-popup-background" @click="$emit('back')">
</div>

<VisibleRegion>
  <div id="idle-popup">
    <div id="idle-popup-title">
      가만히 계시는군요!
    </div>
    <div id="idle-popup-text">
      화살표를 터치해서 다른 골목으로 이동해보세요.<br>
      골목들의 구석구석을 탐험해보세요.
    </div>
    <div id="idle-popup-next">
      ✥ 여백 화면을 터치해 다시 뒤로 가기
    </div>
  </div>
</VisibleRegion>
</template>

<style>
#idle-popup-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#idle-popup {
  /*background-image: url("/img/mainStreet/idle.png");*/
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 30px;
  right: 30px;
  display: flex;
  height: 800px;
  top: calc(50% - 400px);
  flex-direction: column;
}

#idle-popup div {
  text-align: center;
  color: white;
}

#idle-popup-title {
  padding-top: 170px;
  font-size: 40px;
  font-family: "Hahmlet-Bold";
}

#idle-popup-text {
  padding-top: 60px;
  font-size: 25px;
  font-family: "Hahmlet-Light";
}

#idle-popup-next {
  padding-top: 250px;
  font-size: 25px;
  text-decoration: underline;
  text-underline-position: under;
  font-family: "NanumSquare";
}

</style>
