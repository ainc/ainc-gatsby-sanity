import { MdPlace } from "react-icons/md";

export default {
  name: "eventDetails",
  title: "Event Details",
  type: "object",
  icon: MdPlace,
  fields: [
    {
      name: "details",
      title: "Details to show",
      type: "array",
      description:
        "These values are read from the linked event. Drag to change their order, or remove one to hide it.",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Date and time", value: "date" },
          { title: "Location", value: "location" },
          { title: "Host", value: "host" },
          { title: "Tags", value: "tags" },
        ],
      },
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      details: "details",
    },
    prepare({ details }) {
      const labels = {
        date: "Date",
        location: "Location",
        host: "Host",
        tags: "Tags",
      };
      const shown = Array.isArray(details)
        ? details.map((detail) => labels[detail] || detail).join(", ")
        : "";

      return {
        title: shown || "Event details",
        subtitle: "Event details",
        media: MdPlace,
      };
    },
  },
};
