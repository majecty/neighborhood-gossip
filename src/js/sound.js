import {Howl} from "howler";

class Sound {
  constructor() {
    this.mainSound = new Howl({
      src: ["/sound/main.mp3"],
      loop: true,
    });
    this.koongkoongAmbience2 = new Howl({
      src: ["/sound/koongkoong_ambience2.mp3"],
      loop: true,
    });
    this.neighborhood = new Howl({
      src: ["/sound/neighborhood.mp3"],
    });
    this.baekgolDiary = new Howl({
      src: ["/sound/baekgol_diary.mp3"],
      loop: true,
    });
    this.lady = new Howl({
      src: ["/sound/lady.mp3"],
      loop: true,
    });
    this.transitionSound = new Howl({
      src: ["/sound/transition.mp3"],
    });
    this.diarySound = new Howl({
      src: ["/sound/diary.mp3"],
    });
  }

  play(name) {
    switch (name) {
      case "main":
        console.log("play start sound");
        this.mainSound.fade(0, 1, 1000);
        this.mainSound.play();
        break;
      case "koongkoong2":
        console.log("play second sound");
        this.koongkoongAmbience2.fade(0, 1, 1000);
        this.koongkoongAmbience2.play();
        break;
      case "neighborhood":
        this.neighborhood.play();
        break;
      case "baekgolDiary":
        this.baekgolDiary.fade(0, 1, 1000);
        this.baekgolDiary.play();
        break;
      case "lady":
        this.lady.fade(0, 1, 10000);
        this.lady.play();
        break;
      case "diary":
        console.log("play diary sound");
        this.diarySound.play();
        break;
    }
  }

  fadeoutAndStop(sound) {
    sound.fade(1, 0, 1000);
    setTimeout(() => {
      sound.stop();
    }, 1000);
  }

  stop(name) {
    switch (name) {
      case "main":
        console.log("stop start sound");
        this.fadeoutAndStop(this.mainSound);
        break;
      case "koongkoong2":
        console.log("stop second sound");
        this.fadeoutAndStop(this.koongkoongAmbience2);
        break;
      case "baekgolDiary":
        console.log("stop baekgolDiary sound");
        this.fadeoutAndStop(this.baekgolDiary);
        break;
      case "lady":
        this.fadeoutAndStop(this.lady);
        break;
      case "diary":
        console.log("stop diary sound");
        this.diarySound.stop();
        break;
    }
  }
}

export const sound = new Sound();
