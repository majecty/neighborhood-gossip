<script>
import { sound } from "../../sound";

export default {
  name: "DiaryMain",
  created() {
    this.sound = sound;
  },
};
</script>

<template>
<div id="diary" class="absolute">
  <div id="diary-page">
    <div id="diary-title">
  【 행복한 나날들을 위한 낭만 일기 】
    </div>
    <div id="diary-text-day">
    2014. 11. 07
    </div>
    <div id="diary-text" >

      1인칭을 3인칭으로<br>
      바꿔서 일기를 쓰면 아무리<br>
      하찮은 일이라도 퍽<br>
      낭만적으로 느껴진다.
    </div>
  </div>
  <div id="diary-next">
  ✥ 더 읽으려면 일기장을 터치하세요.
  </div>
</div>

</template>

<style scoped>
/*<style>*/
#diary {
  background-image: url("/img/baekgol/baekgol_diary_inside.png");
  width: calc(2795px * 0.2);
  height: calc(2148px * 0.2);
  background-size: calc(2795px * 0.2) calc(2148px * 0.2);
  /*transform: scale(0.2);*/
  transform-origin: center;
  top: calc(50% - 2148px / 2 * 0.2);
  left: calc(50% - 2795px / 2 * 0.2);
  /*top: 500px;*/
  /*left: 60px;*/
}

#diary-page {
  /*background-color: rgba(255, 0, 0, 0.5);*/
  position: absolute;
  top: 50px;
  left: 300px;
  width: 200px;
  height: 300px;
  position: flex;
  flex-direction: column;
}

#diary-title {
  padding-top: 30px;
}

#diary-text-day {
  padding-top: 40px;
  text-decoration: underline;
  text-underline-position: under;
  /*text-decoration-color: #ff0000;*/
}


#diary-text {
  padding-top: 20px;
}

#diary-next {
  position: absolute;
  top: calc(50% + 210px);
  left: 250px;
  width: 50%;
  text-align: center;
  color: white;
  text-decoration: underline;
  text-underline-position: under;
}

</style>
