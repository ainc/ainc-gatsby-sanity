const CODE_PARAMS = ["code", "discount", "promo"];

export const getEventbriteCode = (search = "") => {
  const params = new URLSearchParams(search);
  for (const key of CODE_PARAMS) {
    const value = params.get(key);
    if (value) return value.trim();
  }
  return "";
};

export const withEventbriteDiscount = (link, code) => {
  if (!link || !code) return link;
  try {
    const url = new URL(link);
    url.searchParams.set("discount", code);
    return url.toString();
  } catch {
    const separator = link.includes("?") ? "&" : "?";
    return `${link}${separator}discount=${encodeURIComponent(code)}`;
  }
};
