// // src/pinball/soundManager.ts
// export class SoundManager {
//   stopMusic() {
//     throw new Error("Method not implemented.");
//   }
//   loadMusic(music: string | undefined) {
//     throw new Error("Method not implemented.");
//   }
//   playMusic() {
//     throw new Error("Method not implemented.");
//   }
//   stop: any;
//   setMuted(_muted: boolean) {
//     throw new Error("Method not implemented.");
//   }
//   private ctx: AudioContext;
//   private buffers = new Map<string, AudioBuffer>();

//   constructor() {
//     this.ctx = new (window.AudioContext ||
//       (window as any).webkitAudioContext)();
//   }

//   setResumeOnInteraction() {
//     const resume = () => {
//       if (this.ctx.state === "suspended") this.ctx.resume();
//       window.removeEventListener("pointerdown", resume);
//       window.removeEventListener("keydown", resume);
//     };
//     window.addEventListener("pointerdown", resume);
//     window.addEventListener("keydown", resume);
//   }

//   async load(name: string, url: string) {
//     const res = await fetch(url);
//     const arrayBuffer = await res.arrayBuffer();
//     const buffer = await this.ctx.decodeAudioData(arrayBuffer);
//     this.buffers.set(name, buffer);
//   }

//   play(name: string, volume = 1, p0: boolean) {
//     const buffer = this.buffers.get(name);
//     if (!buffer) return;
//     const src = this.ctx.createBufferSource();
//     src.buffer = buffer;
//     const gain = this.ctx.createGain();
//     gain.gain.value = volume;
//     src.connect(gain).connect(this.ctx.destination);
//     try {
//       src.start();
//     } catch {
//       // start may fail if context suspended
//     }
//   }
// }


