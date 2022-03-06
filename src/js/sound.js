import {Howl} from "howler";

class Sound {
  constructor() {
    this.mainSound = new Howl({
      src: ["/sound/main.mp3"],
    });
    this.koongkoongAmbience2 = new Howl({
      src: ["/sound/koongkoong_ambience2.mp3"],
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
      case "diary":
        console.log("play diary sound");
        this.diarySound.play();
        break;
    }
  }

  stop(name) {
    switch (name) {
      case "main":
        console.log("stop start sound");
        this.mainSound.fade(1, 0, 1000);
        setTimeout(() => {
          this.mainSound.stop();
        }, 1000);
        this.transitionSound.play();
        break;
      case "second":
        console.log("stop second sound");
        this.koongkoongAmbience2.fade(1, 0, 1000);
        setTimeout(() => {
          this.koongkoongAmbience2.stop();
        }, 1000);
        this.transitionSound.play();
        break;
      case "diary":
        console.log("stop diary sound");
        this.diarySound.stop();
        break;
    }
  }
}

export const sound = new Sound();
