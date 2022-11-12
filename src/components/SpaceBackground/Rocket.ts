import { Sprite } from "./Sprite";

class Rocket extends Sprite {
  public position: {
    x: number;
    y: number;
  };
  public size: number;
  constructor(canvas: HTMLCanvasElement, src: string) {
    super(canvas, src);
    this.size = this.canvas.width / 15;
    this.position = {
      x: this.canvas.width / 2 - this.size / 2,
      y: this.canvas.height - 200,
    };
  }
  draw() {
    this.position.y -= 0.01;
    this.ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

export default Rocket;
