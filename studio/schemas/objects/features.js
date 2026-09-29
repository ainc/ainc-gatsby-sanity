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
      of: [
        {
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
        },
      ],
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
