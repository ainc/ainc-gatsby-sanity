export const BOARD_WIDTH = 600;
export const BOARD_HEIGHT = 400;

export const RESERVED_WIDTH = 170; // profile card
export const RESERVED_HEIGHT = 200;

export const PIN_SIZE = 80;
export const BUFFER = 10;

const MIN_W = 120;
const ROW_H = BOARD_HEIGHT / 2;
const PIN_A = (PIN_SIZE + BUFFER) ** 2;

export const randBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

/* build one row so sum(widths) == BOARD_WIDTH */
const buildRow = (row, counts, lostLeft) => {
  const n = row.length;
  if (!n) return [];

  /* base width */
  let w = new Array(n).fill(Math.floor((BOARD_WIDTH - lostLeft) / n));
  w[n - 1] = BOARD_WIDTH - lostLeft - w[0] * (n - 1);
  w[0] += lostLeft; // give reserved width to first lane

  /* ensure capacity & MIN_W without overflow */
  const need = (g, idx) =>
    Math.max(
      MIN_W,
      Math.ceil((counts[g] * PIN_A) / ROW_H) + (idx === 0 ? lostLeft : 0),
    );

  for (let i = 0; i < n; i++) {
    let deficit = need(row[i], i) - w[i];
    if (deficit <= 0) continue;

    /* pull spare from lanes right-to-left */
    for (let j = n - 1; j >= 0 && deficit > 0; j--) {
      if (j === i) continue;
      const spare = w[j] - need(row[j], j);
      if (spare <= 0) continue;
      const take = Math.min(spare, deficit);
      w[j] -= take;
      w[i] += take;
      deficit -= take;
    }
  }

  /* clamp if still overflow */
  const total = w.reduce((s, x) => s + x, 0);
  if (total > BOARD_WIDTH) {
    const excess = total - BOARD_WIDTH;
    w[w.length - 1] -= excess;
  }
  return w;
};

export const calculateGroupBounds = (groups) => {
  const counts = {};
  groups.forEach((g) => {
    const k = (g || "No Group").trim();
    counts[k] = (counts[k] || 0) + 1;
  });

  const uniq = Object.keys(counts).length ? Object.keys(counts) : ["No Group"];
  const nTop = Math.ceil(uniq.length / 2);
  const top = uniq.slice(0, nTop);
  const bot = uniq.slice(nTop);
  const bounds = {};

  /* top row */
  const wTop = buildRow(top, counts, RESERVED_WIDTH);
  let cursor = 0;
  top.forEach((g, i) => {
    bounds[g] = {
      xMin: cursor,
      xMax: cursor + wTop[i],
      yMin: 0,
      yMax: ROW_H,
    };
    cursor += wTop[i];
  });

  /* bottom row */
  const wBot = buildRow(bot, counts, 0);
  cursor = 0;
  bot.forEach((g, i) => {
    bounds[g] = {
      xMin: cursor,
      xMax: cursor + wBot[i],
      yMin: ROW_H,
      yMax: BOARD_HEIGHT,
    };
    cursor += wBot[i];
  });

  return bounds;
};
