//button.js
export default {
  name: "button",
  type: "object",
  title: "Button",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Button Text",
    },
    {
      name: "url",
      type: "string",
      title: "Button URL",
    },
    {
      name: "variant",
      type: "string",
      title: "Button Style",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Outline", value: "outline" },
        ],
      },
    },
  ],
};
