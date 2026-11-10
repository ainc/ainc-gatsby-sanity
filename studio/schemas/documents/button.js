import { FaMousePointer } from "react-icons/fa";

export default {
  name: "button",
  title: "Button",
  type: "object",
  icon: FaMousePointer,
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      description: "The text on the button.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "linkSource",
      type: "string",
      title: "Link",
      description: "Where this button should go.",
      initialValue: "event",
      options: {
        list: [
          { title: "Event registration link", value: "event" },
          { title: "Custom link", value: "custom" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "url",
      title: "Custom URL",
      description: "A full URL or a path on this site, such as /fellowship.",
      hidden: ({ parent }) => parent?.linkSource !== "custom",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }).custom((url, context) => {
          if (context.parent?.linkSource !== "custom") return true;
          if (!url) return "Add a URL for this button";
          return true;
        }),
    },
  ],
  preview: {
    select: {
      title: "label",
      linkSource: "linkSource",
      url: "url",
    },
    prepare({ title, linkSource, url }) {
      return {
        title: title || "Button",
        subtitle:
          linkSource === "custom"
            ? url || "Custom link"
            : "Button · event registration link",
        media: FaMousePointer,
      };
    },
  },
};
