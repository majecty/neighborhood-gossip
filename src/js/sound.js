import { Howl } from "howler";

class Sound {
  constructor() {
    this.startSound = new Howl({
      src: ["/sound/start.mp3"],
    });
    this.secondSound = new Howl({
      src: ["/sound/second.mp3"],
    });
    this.transitionSound = new Howl({
      src: ["/sound/transition.mp3"],
    });
  }

  play(name) {
    switch (name) {
      case "start":
        this.startSound.play();
        break;
      case "second":
        this.secondSound.play();
        break;
    }
  }
  stop(name) {
    switch (name) {
      case "start":
        this.startSound.stop();
        break;
      case "second":
        this.secondSound.stop();
        break;
    }
  }
}

export const sound = new Sound();
