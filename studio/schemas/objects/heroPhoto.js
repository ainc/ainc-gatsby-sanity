export default {
  name: "heroPhoto",
  title: "Photo",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Describe the photo for people who cannot see it.",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Photo",
        media,
      };
    },
  },
};
