import { FaRegWindowMaximize } from "react-icons/fa";

export default {
  name: "banner",
  type: "document",
  title: "Banner",
  __experimental_actions: [
    "create",
    "update",
    // "delete",
    "publish",
  ],
  icon: FaRegWindowMaximize,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Banner",
      hidden: true,
    },
    {
      name: "enabled",
      type: "boolean",
      title: "Enabled",
      description:
        "Turn this off to hide the site-wide banner without deleting the content.",
      initialValue: false,
    },
    {
      name: "link",
      title: "Banner link",
      type: "link",
      description:
        "Title is the full banner sentence. URL can be https://... or a site path like /events/5across. Behavior is same tab vs new tab. The date does not update from Events — edit the title when it changes.",
    },
  ],
};
