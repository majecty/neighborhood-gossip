import {Howl} from "howler";

class Sound {
  constructor() {
    this.mainSound = new Howl({
      src: ["/sound/main.mp3"],
    });
    this.secondSound = new Howl({
      src: ["/sound/second.mp3"],
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
      case "second":
        console.log("play second sound");
        this.secondSound.fade(0, 1, 1000);
        this.secondSound.play();
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
        this.secondSound.fade(1, 0, 1000);
        setTimeout(() => {
          this.secondSound.stop();
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
