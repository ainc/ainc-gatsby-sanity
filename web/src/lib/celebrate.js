import confetti from "canvas-confetti";

// Same brand burst as 5across-vote, fired once and kept small for this page.
const CONFETTI_COLORS = ["#ee343b", "#fd736d", "#db0017", "#fffafa"];

const LOGO_MARK_PATH =
  "M320.75,410.86l-90.11-180.22h180.22l-90.11,180.22Z " +
  "M205.4,180.22L115.29,0h180.22l-90.11,180.22Z " +
  "M115.29,430.12l90.11-180.22,90.11,180.22H115.29Z " +
  "M410.86,199.48L230.64,199.48L320.75,19.26Z " +
  "M0,199.48L90.11,19.26l90.11,180.22H0Z";
const TRIANGLE_PATH = "M0,199.48L90.11,19.26l90.11,180.22H0Z";

let shapes = null;

function ensureShapes() {
  if (shapes) return shapes;
  shapes = {
    tumbling: [confetti.shapeFromPath({ path: TRIANGLE_PATH })],
    flat: [
      confetti.shapeFromPath({ path: LOGO_MARK_PATH }),
      confetti.shapeFromPath({ path: LOGO_MARK_PATH }),
      confetti.shapeFromText({ text: "🦄", scalar: 1.2 }),
    ],
  };
  return shapes;
}

let pageFire = null;
let pageCanvas = null;

function mountCanvas(container) {
  if (pageCanvas?.isConnected) return pageCanvas;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = [
    "position:absolute",
    "left:50%",
    "bottom:-2rem",
    "width:100vw",
    "height:100vh",
    "transform:translateX(-50%)",
    "pointer-events:none",
    "z-index:1",
  ].join(";");
  container.appendChild(canvas);
  pageCanvas = canvas;
  pageFire = confetti.create(canvas, { resize: true, useWorker: false });
  return canvas;
}

function originFor(target, canvas) {
  const button = target.getBoundingClientRect();
  const area = canvas.getBoundingClientRect();
  if (!area.width || !area.height) return { x: 0.5, y: 0.72 };
  return {
    x: (button.left + button.width / 2 - area.left) / area.width,
    y: (button.top + button.height / 2 - area.top) / area.height,
  };
}

export function celebrate(target) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!target) return;

  const container = target.parentElement;
  if (!container) return;
  const canvas = mountCanvas(container);
  const fire = pageFire;
  const { tumbling, flat } = ensureShapes();
  const origin = originFor(target, canvas);
  const base = {
    origin,
    colors: CONFETTI_COLORS,
    gravity: 0.7,
    scalar: 1.15,
    decay: 0.93,
    ticks: 220,
  };

  const shoot = (count, opts) => {
    fire({
      ...base,
      ...opts,
      shapes: tumbling,
      particleCount: Math.round(count * 0.7),
    });
    fire({
      ...base,
      ...opts,
      shapes: flat,
      flat: true,
      particleCount: Math.round(count * 0.3),
    });
  };

  shoot(40, { angle: 90, spread: 60, startVelocity: 28 });
  shoot(80, { angle: 10, spread: 36, startVelocity: 90 });
  shoot(80, { angle: 170, spread: 36, startVelocity: 90 });
}
