export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subheading",
      type: "string",
      title: "Subheading",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
