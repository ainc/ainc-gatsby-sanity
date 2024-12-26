import { GiGraduateCap } from "react-icons/gi";

export default {
  name: "bootcampTestimonials",
  type: "document",
  title: "Bootcamp Testimonials",
  icon: GiGraduateCap,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Full Name",
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
