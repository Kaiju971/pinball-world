import { Ball } from "../objects/Ball";
import { Flipper } from "../objects/Flipper";
import { Bumper } from "../objects/Bumper";
import { runLoop } from "./loop";
import { AudioManager } from "../audio/AudioManager";

export class Game {
  private ctx: CanvasRenderingContext2D;
  private ball: Ball;
  private flippers: Flipper[] = [];
  private bumpers: Bumper[] = [];
  private running = false;
  private audio = new AudioManager();

  constructor(private canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not found");
    this.ctx = ctx;

    this.ball = new Ball(210, 200);

    this.flippers.push(new Flipper(140, 700, -1));
    this.flippers.push(new Flipper(280, 700, 1));

    this.bumpers.push(new Bumper(210, 300));

    // Load audio
    this.audio.load("bumper", "/assets/audio/bumper.wav");
    this.audio.load("flipper", "/assets/audio/flipper.wav");
  }

  start() {
    this.running = true;
    runLoop(() => this.update());
  }

  stop() {
    this.running = false;
  }

  private update() {
    if (!this.running) return;

    this.ball.update();
    this.flippers.forEach((f) => f.update(this.ball));
    this.bumpers.forEach((b) =>
      b.update(this.ball, () => {
        this.audio.play("bumper");
      })
    );

    this.render();
  }

  private render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ball.draw(ctx);
    this.flippers.forEach((f) => f.draw(ctx));
    this.bumpers.forEach((b) => b.draw(ctx));
  }
}
