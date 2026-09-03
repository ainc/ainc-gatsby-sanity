// Create studio/schemas/documents/timeline.js along these lines:

// title — page heading
// intro — optional paragraph
// milestones — array of objects, each with:
// year (number)
// heading (string)
// body (text or simplePortableText)
// image (image with hotspot, plus alt like studio/schemas/objects/figure.js)
// optional link

export default {
  name: "timelineEvent",
  type: "document",
  title: "Timeline Event",
  fields: [
    {
      name: "date",
      type: "date", // not datetime
      title: "Date",
      options: { dateFormat: "MMMM D, YYYY" },
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
      options: { hotspot: true },
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
  preview: {
    select: {
      title: "eventName",
      subtitle: "date",
      media: "picture",
    },
    //Show date as MMMM D, YYYY in preview subtitle
    prepare(selection) {
      const { title, subtitle, media } = selection;

      const d = new Date(subtitle);
      let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      let month = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
      let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);

      return {
        title: title,
        subtitle: `${month} ${day}, ${year}`,
        media: media,
      };
    },
  },
};
