export default {
  name: "heroImage",
  title: "Hero Image",
  type: "object",
  fields: [
    {
        name: "title",
        type: "string",
        title: "Title",
    },
    {
        name: "image",
        type: "image",
        title: "Image",
    },
    {
        name: "text",
        type: "simplePortableText",
        title: "Text",
        description: "Text to display over hero image.",
    }
  ],
};