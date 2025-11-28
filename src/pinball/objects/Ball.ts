export class Ball {
  x: number;
  y: number;
  vx = 2;
  vy = 3;
  radius = 10;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Walls
    if (this.x < this.radius || this.x > 420 - this.radius) {
      this.vx *= -1;
    }
    if (this.y < this.radius || this.y > 800 - this.radius) {
      this.vy *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
