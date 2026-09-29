import { MdPhoto } from "react-icons/md";

export default {
  name: "heroImage",
  title: "Hero",
  type: "object",
  icon: MdPhoto,
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      description:
        "Leave blank to use the event name. The large image is the picture on the linked event.",
    },
    {
      name: "subheading",
      type: "string",
      title: "Subheading",
      description:
        "Optional line above the heading. Leave blank to use the event date.",
    },
    {
      name: "text",
      type: "simplePortableText",
      title: "Text",
      description: "Optional short text under the heading.",
    },
    {
      name: "showRegistrationButton",
      type: "boolean",
      title: "Registration button",
      description:
        "Shows a button on the hero that uses the event's registration link.",
      initialValue: true,
    },
    {
      name: "buttonLabel",
      type: "string",
      title: "Button label",
      initialValue: "Register",
      hidden: ({ parent }) => !parent?.showRegistrationButton,
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Event name",
        subtitle: "Hero · event image",
        media: MdPhoto,
      };
    },
  },
};
