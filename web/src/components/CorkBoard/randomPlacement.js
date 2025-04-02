// src/components/CorkBoard/randomPlacement.js

export const BOARD_WIDTH = 1000;
export const BOARD_HEIGHT = 700;

export const RESERVED_WIDTH = 200;
export const RESERVED_HEIGHT = 200;

/**
 * Example bounding boxes for each group.
 * Adjust these to fit your desired layout or "group" areas.
 */
const GROUP_BOUNDS = {
  Retreat: {
    xMin: 500, xMax: 1000,
    yMin: 0,   yMax: 350
  },
  Anniversary: {
    xMin: 0,   xMax: 500,
    yMin: 350, yMax: 700
  },
  Excellence: {
    xMin: 500, xMax: 1000,
    yMin: 350, yMax: 700
  },
  Misc: {
    xMin: 300, xMax: 700,
    yMin: 100, yMax: 350
  }
};

/**
 * Returns a random { x, y } within the bounding box for the pin's "type" (group),
 * avoiding the top-left 200x200 region.
 */
export function getRandomPositionForPin(pinGroup, pinSize) {
  const bounds = GROUP_BOUNDS[pinGroup] || GROUP_BOUNDS.Misc;
  const { xMin, xMax, yMin, yMax } = bounds;

  let x, y;
  let tries = 0;
  const MAX_TRIES = 1000;

  while (tries < MAX_TRIES) {
    x = Math.floor(xMin + Math.random() * (xMax - xMin - pinSize));
    y = Math.floor(yMin + Math.random() * (yMax - yMin - pinSize));

    // If it does NOT intersect the 200x200 top-left, we accept it
    if (!(x < RESERVED_WIDTH && y < RESERVED_HEIGHT)) {
      return { x, y };
    }
    tries++;
  }

  // fallback if we can't find a safe spot
  return { x: xMin, y: yMin };
}
