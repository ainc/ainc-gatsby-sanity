import { GiGraduateCap } from "react-icons/gi";

export default {
  name: "bootcampClass",
  type: "document",
  title: "Bootcamp Class",
  icon: GiGraduateCap,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "date",
      type: "date",
      title: "Graduation Date",
    },
  ],
  orderings: [
    {
      title: "Graduation Date (newest first)",
      name: "graduationDateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Graduation Date (oldest first)",
      name: "graduationDateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
};
