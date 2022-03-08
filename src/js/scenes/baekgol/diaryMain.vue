<script>
import { sound } from "../../sound";

export default {
  name: "DiaryMain",
  created() {
    this.sound = sound;
  },
  mounted() {
    this.sound.play("diary");
  },
};
</script>

<template>
<div id="baekgol-diary" class="absolute">
  <div id="baekgol-diary-page">
    <div id="baekgol-diary-title">
  【 행복한 나날들을 위한 낭만 일기 】
    </div>
    <div id="baekgol-diary-text-day">
    2014. 11. 07
    </div>
    <div id="baekgol-diary-text" >
      1인칭을 3인칭으로
      바꿔서 일기를 쓰면 아무리
      하찮은 일이라도 퍽
      낭만적으로 느껴진다.
    </div>
  </div>
  <div id="baekgol-diary-next">
  ✥ 더 읽으려면 일기장을 터치하세요.
  </div>
</div>

</template>

<style>
/*<style>*/
#baekgol-diary {
  --width: 2795;
  --height: 2148;
  --ratio: 0.25;
  background-image: url("/img/baekgol/baekgol_diary_inside.png");
  /*aspect-ratio: calc(var(--width) / var(--height));*/
  width: calc(1px * var(--width) * var(--ratio));
  height: calc(1px * var(--height) * var(--ratio));
  background-size: 100%;
  top: calc(50% - 1px * (var(--height) * var(--ratio)) / 2);
  left: calc(50% - 1px * (var(--width) * var(--ratio)) / 2);
  font-size: 24px;
}

#baekgol-diary-page {
  /*background-color: rgba(255, 0, 0, 0.5);*/
  position: absolute;
  top: 90px;
  /*left: 300px;*/
  right: 50px;
  width: 290px;
  height: 300px;
  position: flex;
  flex-direction: column;
  font-family: "Bohyun";
}

#baekgol-diary-title {
  padding-top: 30px;
}

#baekgol-diary-text-day {
  padding-top: 40px;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-thickness: 2px;
  /*font-family: "NanumSquare";*/
  /*text-decoration-color: #ff0000;*/
}


#baekgol-diary-text {
  padding-top: 20px;
}

#baekgol-diary-next {
  position: absolute;
  width: 50%;
  right: 30px;
  bottom: -10px;
  text-align: center;
  color: white;
  text-decoration: underline;
  text-underline-position: under;
}

</style>
