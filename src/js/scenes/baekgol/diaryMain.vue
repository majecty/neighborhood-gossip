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

      1인칭을 3인칭으로
      바꿔서 일기를 쓰면 아무리
      하찮은 일이라도 퍽
      낭만적으로 느껴진다.
    </div>
  </div>
  <div id="diary-next">
  ✥ 더 읽으려면 일기장을 터치하세요.
  </div>
</div>

</template>

<style>
/*<style>*/
#diary {
  --width: 2795;
  --height: 2148;
  --ratio: 0.25;
  background-image: url("/img/baekgol/baekgol_diary_inside.png");
  aspect-ratio: calc(var(--width) / var(--height));
  width: calc(1px * var(--width) * var(--ratio));
  background-size: 100%;
  top: calc(50% - 1px * (var(--height) * var(--ratio)) / 2);
  left: calc(50% - 1px * (var(--width) * var(--ratio)) / 2);
  font-size: 18px;
}

#diary-page {
  /*background-color: rgba(255, 0, 0, 0.5);*/
  position: absolute;
  top: 90px;
  /*left: 300px;*/
  right: 50px;
  width: 290px;
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
  text-decoration-thickness: 4px;
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
