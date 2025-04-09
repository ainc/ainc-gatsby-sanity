// schemas/cta.js
export default {
  name: "cta",
  type: "document",
  title: "Call to Action",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "text",
      type: "text",
      title: "Text",
      rows: 3,
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "button",
      type: "button",
      title: "Button",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "backgroundImage",
    },
  },
};
