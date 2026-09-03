export default {
  name: "internTestimonials",
  type: "document",
  title: "Intern Testimonials",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      name: "cohort",
      type: "string",
      title: "Cohort",
    },
    {
      name: "team",
      type: "string",
      title: "Team",
      options: {
        list: [
          { title: "Marketing", value: "Marketing" },
          { title: "Video", value: "Video" },
          { title: "Development", value: "Development" },
          { title: "Design", value: "Design" },
          { title: "Events", value: "Events" },
          { title: "VC Fund", value: "VC Fund" },
          { title: "KEHOF", value: "KEHOF" },
          { title: "Outreach", value: "Outreach" },
        ],
      },
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
    },
    {
      name: "testimonial",
      type: "string",
      title: "Testimonial",
    },
  ],
};
