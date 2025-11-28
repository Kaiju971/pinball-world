export class Bumper {
  radius = 30;

  constructor(public x: number, public y: number) {}

  update(ball: any, onHit: () => void) {
    const dx = ball.x - this.x;
    const dy = ball.y - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < this.radius + ball.radius) {
      ball.vx *= -1;
      ball.vy *= -1;
      onHit();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
