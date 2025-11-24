export default function getEmbedUrl(url, { autoplay = 1, muted = 1 } = {}) {
  if (!url) return "";

  try {
    // Ensure URL object can be parsed
    const parsed = new URL(url);

    // --- CASE 1: URL IS ALREADY EMBED FORMAT ---
    if (parsed.pathname.startsWith("/embed/")) {
      // Keep existing params, but enforce autoplay/muted
      parsed.searchParams.set("autoplay", autoplay);
      parsed.searchParams.set("mute", muted);

      return parsed.toString();
    }

    // --- CASE 2: NORMAL WATCH URL ---
    // e.g. https://www.youtube.com/watch?v=ID&si=xyz
    if (parsed.searchParams.has("v")) {
      const videoId = parsed.searchParams.get("v");

      // Build embed URL
      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

      // Preserve known params (si, etc.)
      parsed.searchParams.forEach((value, key) => {
        if (key !== "v") embedUrl.searchParams.set(key, value);
      });

      // Add autoplay/muted settings
      embedUrl.searchParams.set("autoplay", autoplay);
      embedUrl.searchParams.set("mute", muted);

      return embedUrl.toString();
    }

    // --- CASE 3: Unsupported format ---
    return url;
  } catch {
    return url;
  }
}
