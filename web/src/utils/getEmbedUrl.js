export function getEmbedUrl(url = "") {
  if (!url) return "";

  let embed = url.trim();

  // If it's a youtube short
  if (embed.includes("youtube.com/shorts/")) {
    embed = embed.replace("youtube.com/shorts/", "youtube.com/embed/");
  }

  // Standard YouTube URL with watch?v=
  if (embed.includes("watch?v=")) {
    embed = embed.replace("watch?v=", "embed/");
  }

  // Share URLs like youtu.be/XYZ123
  if (embed.includes("youtu.be/")) {
    embed = embed.replace("youtu.be/", "youtube.com/embed/");
  }

  // If it's already embed, leave it alone
  if (!embed.includes("embed")) {
    // Last fallback
    embed = embed.replace("youtube.com/", "youtube.com/embed/");
  }

  // Add video params
  const hasParams = embed.includes("?");
  embed += hasParams ? "&" : "?";
  embed += "autoplay=1&mute=1&rel=0";

  return embed;
}