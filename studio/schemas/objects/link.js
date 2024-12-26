import { FaLink } from "react-icons/fa6";

export default {
  name: "link",
  type: "object",
  title: "Link",
  icon: FaLink,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The text that will be displayed for the link.",
      validation: (Rule) => Rule.required().error("Title is required."),
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description: "The URL to which the link will navigate.",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ["http", "https"],
        })
          .required()
          .error("A valid URL is required."),
    },
    {
      name: "behavior",
      type: "string",
      title: "Behavior",
      description:
        "Specifies how the link should behave (e.g., open in new tab).",
      options: {
        list: [
          { title: "Same Tab", value: "same_tab" },
          { title: "New Tab", value: "new_tab" },
        ],
        layout: "radio",
      },
      validation: (Rule) =>
        Rule.required().error("Behavior selection is required."),
    },
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare(selection) {
      const { title, url } = selection;
      return {
        title: title,
        subtitle: url,
      };
    },
  },
};
