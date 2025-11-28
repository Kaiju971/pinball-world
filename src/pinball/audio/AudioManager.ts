export class AudioManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();

  load(name: string, url: string) {
    const audio = new Audio(url);
    this.sounds.set(name, audio);
  }

  play(name: string) {
    const sound = this.sounds.get(name);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  }
}
