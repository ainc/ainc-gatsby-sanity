export const BOARD_WIDTH = 1000;
export const BOARD_HEIGHT = 700;
export const RESERVED_WIDTH = 200;
export const RESERVED_HEIGHT = 200;

const GROUP_BOUNDS = {
  Retreat: {
    xMin: 500,
    xMax: 1000,
    yMin: 0,
    yMax: 350,
  },
  Anniversary: {
    xMin: 0,
    xMax: 500,
    yMin: 350,
    yMax: 700,
  },
  Excellence: {
    xMin: 500,
    xMax: 1000,
    yMin: 350,
    yMax: 700,
  },
  Misc: {
    xMin: 300,
    xMax: 700,
    yMin: 100,
    yMax: 350,
  },
};

export function getRandomPositionForPin(pinGroup, pinSize) {
  const bounds = GROUP_BOUNDS[pinGroup] || GROUP_BOUNDS.Misc;
  const { xMin, xMax, yMin, yMax } = bounds;
  let x,
    y,
    tries = 0;
  const MAX_TRIES = 1000;
  while (tries < MAX_TRIES) {
    x = Math.floor(xMin + Math.random() * (xMax - xMin - pinSize));
    y = Math.floor(yMin + Math.random() * (yMax - yMin - pinSize));
    if (!(x < RESERVED_WIDTH && y < RESERVED_HEIGHT)) {
      return { x, y };
    }
    tries++;
  }
  return { x: xMin, y: yMin };
}
