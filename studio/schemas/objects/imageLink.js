export default {
  name: "imageLink",
  title: "Image and Link",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "secondaryImage",
      type: "image",
      title: "Secondary Image",
      description:
        "Optional logo specifically designed for optimal visibility on dark backgrounds.",
      hidden: ({ document }) => document?._type === "page",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (Rule) =>
        Rule.error("You have to fill out the alternative text.").required(),
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      description:
        "A full URL, or a path on this site such as /fellowship. Leave blank if the image should not link anywhere.",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "title",
      type: "string",
      title: "Image Caption",
      description:
        "In some cases, the rendered image may have a title associated with it.",
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "alt",
    },
  },
};
