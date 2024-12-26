export default {
  name: "imageSlider",
  type: "document",
  title: "Image Slider",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Slider Title",
      description: "In most cases, this will not be displayed",
    },
    {
      name: "sliderType",
      type: "string",
      title: "Slider Type",
      description:
        "Default to the Basic Slider, refer to this page for documentation: https://www.npmjs.com/package/hero-slider",
      options: {
        list: [
          { title: "Basic Slider", value: "basic-slider" },
          { title: "Navbar Slider", value: "navbar-slider" },
          { title: "Vertical Slider", value: "vertical-slider" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [{ type: "sliderImage" }],
    },
  ],
};
