/**
 * Pannellum API viewer for /workspace/tour.
 *
 * Underscore prefix: Gatsby ignores `_*.js` under src/pages, so this file
 * is not turned into a route.
 *
 * Loads pannellum.js / pannellum.css from jsDelivr (not self-hosted), then
 * mounts a tour with the config in _tourConfig.js. Scene buttons call
 * viewer.loadScene(); doorway clicks use hotSpots in that same config.
 */
import React, { useEffect, useRef, useState } from "react";
import { HOTSPOT_DEBUG, sceneList, tourConfig } from "./_tourConfig";
import * as styles from "./pannellumTour.module.scss";

// CDN URLs for the API build — swap the version here if Pannellum releases an update.
const PANNELLUM_VERSION = "2.5.6";
const PANNELLUM_CSS = `https://cdn.jsdelivr.net/npm/pannellum@${PANNELLUM_VERSION}/build/pannellum.css`;
const PANNELLUM_JS = `https://cdn.jsdelivr.net/npm/pannellum@${PANNELLUM_VERSION}/build/pannellum.js`;

/**
 * Inject the CDN stylesheet and script once, then resolve with window.pannellum.
 * Gatsby SSR has no window, so this must only run in useEffect on the client.
 * Reuses existing tags if React remounts (Fast Refresh / navigating away and back).
 */
const loadPannellum = () =>
  new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Pannellum can only load in the browser."));
      return;
    }

    if (window.pannellum) {
      resolve(window.pannellum);
      return;
    }

    if (!document.getElementById("pannellum-css")) {
      const link = document.createElement("link");
      link.id = "pannellum-css";
      link.rel = "stylesheet";
      link.href = PANNELLUM_CSS;
      document.head.appendChild(link);
    }

    const existing = document.getElementById("pannellum-js");
    if (existing) {
      if (window.pannellum) {
        resolve(window.pannellum);
        return;
      }
      existing.addEventListener("load", () => resolve(window.pannellum), {
        once: true,
      });
      existing.addEventListener(
        "error",
        () => reject(new Error("Pannellum failed to load from the CDN.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = "pannellum-js";
    script.src = PANNELLUM_JS;
    script.async = true;
    script.onload = () => resolve(window.pannellum);
    script.onerror = () =>
      reject(new Error("Pannellum failed to load from the CDN."));
    document.body.appendChild(script);
  });

const PannellumTour = () => {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [sceneId, setSceneId] = useState(tourConfig.default.firstScene);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  // Create the viewer after mount; destroy it on unmount so client-side
  // navigation does not leave a WebGL context behind.
  useEffect(() => {
    let cancelled = false;

    loadPannellum()
      .then((pannellum) => {
        if (cancelled || !containerRef.current || !pannellum) return;

        const viewer = pannellum.viewer(containerRef.current, tourConfig);
        viewerRef.current = viewer;
        setReady(true);

        viewer.on("scenechange", (id) => {
          setSceneId(id);
        });
        viewer.on("error", (message) => {
          setError(
            message ||
              "The panorama could not be loaded. Check the Imgur URL and CORS headers.",
          );
        });
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "The tour viewer failed to start.");
        }
      });

    return () => {
      cancelled = true;
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, []);

  // Jump to a scene without using a hotspot (the button row above the viewer).
  const loadScene = (id) => {
    if (!viewerRef.current || id === sceneId) return;
    viewerRef.current.loadScene(id);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {error && <p className={styles.error}>{error}</p>}

        {/* Scene switcher — usable even before doorway hotspots are placed */}
        <div
          className={styles.sceneNav}
          role="tablist"
          aria-label="Tour scenes"
        >
          {sceneList.map((scene) => {
            const isActive = scene.id === sceneId;
            return (
              <button
                key={scene.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.sceneBtn} ${
                  isActive ? styles.sceneBtnActive : ""
                }`.trim()}
                disabled={!ready}
                onClick={() => loadScene(scene.id)}
              >
                {scene.title}
              </button>
            );
          })}
        </div>

        {/* Empty mount node; Pannellum injects the canvas and controls here */}
        <div
          ref={containerRef}
          className={styles.viewer}
          role="application"
          aria-label="Awesome Inc virtual tour"
        />

        {/* Shown only while placing hotspots; hide by setting HOTSPOT_DEBUG false */}
        {HOTSPOT_DEBUG && (
          <p className={styles.debugNote}>
            Hotspot debug is on. Click a doorway in the panorama, then copy the
            Pitch and Yaw values from the browser console into{" "}
            <code>web/src/pages/workspace/tour/_tourConfig.js</code>.
          </p>
        )}
      </div>
    </div>
  );
};

export default PannellumTour;
