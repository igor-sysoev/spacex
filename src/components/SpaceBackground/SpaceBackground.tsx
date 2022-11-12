import React, { useCallback, useRef, useState } from "react";
import { useEffect } from "react";
import { generateSprites, trackImagesLoaded } from "../../utils";
import { SpriteInterface } from "./Sprite";

import classes from "./style.module.css";

const SpaceBackground: React.FC = () => {
  const [sprites, setSprites] = useState<SpriteInterface[]>([]);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const ref = useRef<HTMLCanvasElement>(null);

  const update = useCallback(() => {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sprites.forEach((sprite) => {
        sprite.draw();
      });
      requestAnimationFrame(update);
    }
  }, [ctx, canvas, sprites]);

  const init = (): void => {
    const sprites = generateSprites(ref.current as HTMLCanvasElement);
    trackImagesLoaded(sprites, setSprites);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.width = window.innerWidth;
      ref.current.height = window.innerHeight;
      setCtx(ref.current.getContext("2d"));
      setCanvas(ref.current);
      init();
    }
  }, [ref]);

  useEffect(() => {
    if (sprites.length) {
      update();
    }
  }, [update, sprites]);

  return (
    <>
      {!sprites.length && <h1>LOADING...</h1>}
      <canvas className={classes.canvas} ref={ref}></canvas>
    </>
  );
};

export default SpaceBackground;
