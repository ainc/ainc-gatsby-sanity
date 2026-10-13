export default {
  name: "featureItem",
  title: "Feature",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "Optional image shown with this feature.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "text",
      title: "Text",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
