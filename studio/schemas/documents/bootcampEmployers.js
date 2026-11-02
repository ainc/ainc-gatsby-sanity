import { GiGraduateCap } from "react-icons/gi";

export default {
  name: "bootcampEmployers",
  type: "document",
  title: "Bootcamp Employers",
  icon: GiGraduateCap,
  fields: [
    {
      name: "company",
      type: "string",
      title: "Company Name",
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
    },
  ],
};
