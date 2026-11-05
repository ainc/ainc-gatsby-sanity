import { useEffect } from "react";
import { set } from "sanity";

const HERO_KEY = "hero";
const DETAILS_KEY = "details";

const defaultHero = () => ({
  _type: "heroImage",
  _key: HERO_KEY,
  showRegistrationButton: true,
  buttonLabel: "Register",
});

const defaultDetails = () => ({
  _type: "eventDetails",
  _key: DETAILS_KEY,
  details: ["date", "location", "host"],
});

const pickPinned = (list, type, preferredKey) =>
  list.find((item) => item?._type === type && item?._key === preferredKey) ||
  list.find((item) => item?._type === type);

export const normalizeLeadSections = (items) => {
  const list = Array.isArray(items) ? items.filter(Boolean) : [];
  const hero = pickPinned(list, "heroImage", HERO_KEY) || defaultHero();
  const details =
    pickPinned(list, "eventDetails", DETAILS_KEY) || defaultDetails();
  const rest = list.filter((item) => item !== hero && item !== details);

  return [hero, details, ...rest];
};

const sameOrder = (current, next) =>
  Array.isArray(current) &&
  current.length === next.length &&
  next.every(
    (item, index) =>
      current[index]?._key === item?._key &&
      current[index]?._type === item?._type,
  );

const pinnedKeysFrom = (items) =>
  new Set(
    (Array.isArray(items) ? items : [])
      .filter(
        (item) => item?._type === "heroImage" || item?._type === "eventDetails",
      )
      .map((item) => item._key),
  );

const removesPinnedItem = (patch, pinnedKeys) => {
  if (patch?.type !== "unset" || patch.path?.length !== 1) return false;
  const head = patch.path[0];
  if (head && typeof head === "object" && pinnedKeys.has(head._key)) {
    return true;
  }
  return typeof head === "number" && head < 2;
};

export default function FixedLeadSectionsInput(props) {
  const { value, onChange } = props;

  useEffect(() => {
    if (!Array.isArray(value)) return;
    const next = normalizeLeadSections(value);
    if (!sameOrder(value, next)) onChange(set(next));
  }, [value, onChange]);

  const handleChange = (event) => {
    const patches = event?.patches || [];
    const pinnedKeys = pinnedKeysFrom(value);
    if (patches.some((patch) => removesPinnedItem(patch, pinnedKeys))) return;
    onChange(event);
  };

  return props.renderDefault({ ...props, onChange: handleChange });
}
