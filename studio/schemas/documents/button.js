export default {
  name: "button",
  title: "Button",
  type: "document",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      description: "The text on the button.",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description:
        "Link where the button should land. Can be a full URL or a site path.",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https"],
        }),
    },
  ],
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
  },
};
