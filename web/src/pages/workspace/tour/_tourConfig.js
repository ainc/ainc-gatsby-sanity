/**
 * Tour data for the Pannellum API viewer (/workspace/tour).
 *
 * Underscore prefix: Gatsby ignores `_*.js` under src/pages, so this file
 * is not turned into a route. Keep helper modules named `_...` here.
 *
 * A "scene" is one 360 photo. A "hotspot" is a clickable pin on that photo
 * that jumps to another scene (type: "scene") or shows a label/link
 * (type: "info").
 *
 * Hotspot placement:
 * 1. Leave HOTSPOT_DEBUG true.
 * 2. Open /workspace/tour, click a doorway in the panorama.
 * 3. Copy Pitch/Yaw from the browser console into that scene's hotSpots.
 * 4. Set HOTSPOT_DEBUG to false before launch.
 *
 * Imgur must send CORS headers for WebGL. If a scene fails to load, check
 * that panorama is a direct image URL (i.imgur.com/....jpeg), not an album page.
 */

// When true, clicks log Pitch/Yaw to the console and show the helper note under the viewer.
export const HOTSPOT_DEBUG = true;

// Button order above the viewer. Keys must match tourConfig.scenes.
export const SCENE_ORDER = [
  "frontCoworking",
  "hallway",
  "coworkingSpace",
  "kitchen",
];

export const tourConfig = {
  // Shared options for every scene. Per-scene fields below override these.
  default: {
    firstScene: "frontCoworking",
    author: "Awesome Inc",
    sceneFadeDuration: 1000,
    autoLoad: true,
    hotSpotDebug: HOTSPOT_DEBUG,
    // Required so Imgur images can be used as WebGL textures.
    crossOrigin: "anonymous",
  },
  scenes: {
    // Open coworking with the Awesome Inc wall (FH7R6sA).
    frontCoworking: {
      title: "348 Front Coworking Area",
      type: "equirectangular",
      panorama: "https://i.imgur.com/FH7R6sA.jpeg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -6.842897933178463,
          yaw: 46.40762148027774,
          type: "scene",
          text: "Hallway",
          sceneId: "hallway",
        },
      ],
    },
    // Corridor between 348 and the main coworking space (YNUwC1a).
    hallway: {
      title: "Hallway",
      type: "equirectangular",
      panorama: "https://i.imgur.com/YNUwC1a.jpeg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -4.490209379359532,
          yaw: 12.129785318017642,
          type: "scene",
          text: "Coworking Space",
          sceneId: "coworkingSpace",
        },
        {
          pitch: -16.9165080327276,
          yaw: 179.24230659009413,
          type: "scene",
          text: "348 Front Coworking Area",
          sceneId: "frontCoworking",
        },
      ],
    },
    // Interior coworking / fellowship wall (cNlrjJK).
    coworkingSpace: {
      title: "Coworking Space",
      type: "equirectangular",
      panorama: "https://i.imgur.com/cNlrjJK.jpeg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -3.5188428652063246,
          yaw: 167.85340062380413,
          type: "scene",
          text: "Hallway",
          sceneId: "hallway",
        },
        {
          pitch: -0.7620566849169405,
          yaw: 13.012591770067736,
          type: "scene",
          text: "Kitchen",
          sceneId: "kitchen",
        },
      ],
    },
    // Kitchen (mSlw7Vc). One doorway, back to the hallway.
    kitchen: {
      title: "Kitchen",
      type: "equirectangular",
      panorama: "https://i.imgur.com/mSlw7Vc.jpeg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -8.178159837912972,
          yaw: 101.99162039875995,
          type: "scene",
          text: "Hallway",
          sceneId: "hallway",
        },
      ],
    },
  },
};

// Labels for the scene buttons, derived from SCENE_ORDER so titles stay in one place.
export const sceneList = SCENE_ORDER.map((id) => ({
  id,
  title: tourConfig.scenes[id].title,
}));
