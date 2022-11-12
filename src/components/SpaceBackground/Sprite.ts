interface SpriteInterface {
  image: HTMLImageElement;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  draw: () => void;
}

class Sprite implements SpriteInterface {
  public image: HTMLImageElement;
  public ctx: CanvasRenderingContext2D;
  public canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, src: string) {
    this.image = new Image();
    this.image.src = src;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas = canvas;
  }

  draw() {
    throw new Error("Method not implemented for class");
  }
}

export { Sprite, type SpriteInterface };
