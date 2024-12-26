export default {
  name: "sliderImage",
  title: "Slider Image",
  type: "object",
  fields: [
    {
      title: "Header Title",
      name: "title",
      type: "string",
    },
    {
      title: "Header Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Call to Action",
      name: "cta",
      type: "link",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
