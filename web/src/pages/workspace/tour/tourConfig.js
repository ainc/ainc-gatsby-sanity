/**
 * Pannellum tour config for /workspace/tour.
 *
 * Hotspot placement:
 * 1. Leave HOTSPOT_DEBUG true.
 * 2. Open the page, click a doorway in the panorama.
 * 3. Copy Pitch/Yaw from the browser console into a hotSpots entry.
 * 4. Set HOTSPOT_DEBUG to false before launch.
 *
 * Imgur must serve CORS headers for WebGL. If a scene fails to load, the
 * direct image URL is the first thing to check.
 */

export const HOTSPOT_DEBUG = true;

export const SCENE_ORDER = [
  "frontCoworking",
  "hallway",
  "coworkingSpace",
  "kitchen",
];

export const tourConfig = {
  default: {
    firstScene: "frontCoworking",
    author: "Awesome Inc",
    sceneFadeDuration: 1000,
    autoLoad: true,
    hotSpotDebug: HOTSPOT_DEBUG,
    crossOrigin: "anonymous",
  },
  scenes: {
    frontCoworking: {
      title: "348 Front Coworking Area",
      type: "equirectangular",
      panorama: "https://i.imgur.com/FH7R6sA.jpeg",
      hfov: 110,
      hotSpots: [
        {
          pitch: -7.250420023152078,
          yaw: 122.68451875334769,
          type: "scene",
          text: "Hallway",
          sceneId: "hallway",
        },
      ],
    },
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
          pitch: -23.4919841188661,
          yaw: -151.11565503365028,
          type: "scene",
          text: "348 Front Coworking Area",
          sceneId: "frontCoworking",
        },
      ],
    },
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
          pitch: -12.125852108146244,
          yaw: 22.398968137713496,
          type: "scene",
          text: "Kitchen",
          sceneId: "kitchen",
        },
      ],
    },
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

export const sceneList = SCENE_ORDER.map((id) => ({
  id,
  title: tourConfig.scenes[id].title,
}));
