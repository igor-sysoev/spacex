import { off } from "process";
import { Sprite } from "./Sprite";

class Planet extends Sprite {
  public offset: {
    x: number;
    y: number;
  };
  constructor(canvas: HTMLCanvasElement, src: string) {
    super(canvas, src);
    this.offset = {
      y: 0,
      x: 0,
    };
    this.canvas.addEventListener("mousemove", (e: MouseEvent) =>
      this.changeOffset(e)
    );
    this.canvas.addEventListener("mouseout", () => {
      this.offset = {
        x: 0,
        y: 0,
      };
    });
  }

  changeOffset(e: MouseEvent) {
    const offsetX = (e.clientX - this.canvas.width / 2) * 0.007;
    const offsetY = (e.clientY - this.canvas.height / 2) * 0.007;
    this.offset = {
      x: -offsetX,
      y: -offsetY,
    };
  }
  draw() {
    const size = this.canvas.width / 3.5;

    this.ctx.drawImage(
      this.image,
      this.canvas.width / 2 - size / 2 + this.offset.x,
      this.canvas.height / 2 - size / 2 + this.offset.y,
      size,
      size
    );
  }
}

export default Planet;
