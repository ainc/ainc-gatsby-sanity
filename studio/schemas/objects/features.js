import { MdDashboard } from "react-icons/md";

export default {
  name: "features",
  title: "Features",
  type: "object",
  icon: MdDashboard,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [{ type: "featureItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Features",
        subtitle: "Features",
        media: MdDashboard,
      };
    },
  },
};
