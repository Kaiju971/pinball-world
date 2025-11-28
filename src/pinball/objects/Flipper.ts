export class Flipper {
  constructor(
    public x: number,
    public y: number,
    public direction: number // -1 left, +1 right
  ) {}

  update(ball: any) {
    // Basic collision
    if (Math.abs(ball.x - this.x) < 40 && Math.abs(ball.y - this.y) < 10) {
      ball.vy = -Math.abs(ball.vy) - 2;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.x - 40, this.y - 10, 80, 20);
  }
}
