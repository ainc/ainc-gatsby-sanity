import { MdTimeline } from "react-icons/md";

// One Sanity document per milestone (like Press), not one document with numbered images.
// Studio menu: Be Awesome → Timeline (/timeline). Use the Development workspace locally.
export default {
  name: "timelineEvent",
  type: "document",
  title: "Timeline Event",
  icon: MdTimeline,
  fields: [
    {
      name: "date",
      // `date` not `datetime` — milestones are a calendar day, not a clock time (Kyle / issue 553).
      type: "date",
      title: "Date",
      options: {
        dateFormat: "MMMM D, YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        // Editors can set the focal point so mobile and desktop crop from the same file.
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "priority",
      type: "number",
      title: "Order in the same month",
      description:
        "Only needed when two events share a month. Lower shows first.",
    },
  ],
  orderings: [
    {
      title: "Date, oldest first",
      name: "dateAsc",
      by: [
        { field: "date", direction: "asc" },
        { field: "priority", direction: "asc" },
      ],
    },
  ],
  // What the Studio list shows (title, date, thumbnail). Keep prepare simple so
  // empty new documents do not throw "invalid preview config".
  preview: {
    select: {
      title: "title",
      date: "date",
      media: "image",
    },
    prepare({ title, date, media }) {
      return {
        title: title || "New timeline event",
        subtitle: date ? String(date) : "No date yet",
        media,
      };
    },
  },
};
