import Rocket from "./components/SpaceBackground/Rocket";
import Planet from "./components/SpaceBackground/Planet";
import Background from "./components/SpaceBackground/Background";
import { SpriteInterface } from "./components/SpaceBackground/Sprite";
const generateSprites = (canvas: HTMLCanvasElement): any => {
  const PLANET_URL = process.env.PUBLIC_URL + "planet.png";
  const ROCKET_URL: string = process.env.PUBLIC_URL + "rocket.png";

  return [new Planet(canvas, PLANET_URL), new Rocket(canvas, ROCKET_URL)];
};

const trackImagesLoaded = (arr: SpriteInterface[], onLoad: any) => {
  const promiseArr = arr.map(({ image }) => {
    return new Promise((res, rej) => {
      image.onload = () => res(true);
      image.onerror = () => rej();
    });
  });
  Promise.all(promiseArr).then(() => {
    onLoad(arr);
  });
};

export { generateSprites, trackImagesLoaded };
