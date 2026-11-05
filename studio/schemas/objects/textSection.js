import { MdNotes } from "react-icons/md";

export default {
  name: "textSection",
  title: "Text",
  type: "object",
  icon: MdNotes,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Optional heading for this section.",
    },
    {
      name: "text",
      type: "pagePortableText",
      title: "Text",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Text",
        subtitle: "Text",
        media: MdNotes,
      };
    },
  },
};
