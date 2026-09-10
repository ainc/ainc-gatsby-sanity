export default {
  name: "sliderImage",
  title: "Slider Image",
  type: "object",
  fields: [
    {
      title: "Active",
      name: "active",
      type: "boolean",
      description: "Turn off to hide this slide without deleting it.",
      initialValue: true,
    },
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
      active: "active",
      media: "image",
    },
    prepare({ title, active, media }) {
      return {
        title: title || "Untitled slide",
        subtitle: active === false ? "Hidden" : "Visible",
        media,
      };
    },
  },
};
