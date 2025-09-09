export default {
  type: "document",
  name: "fellowshipTestimonials",
  title: "Fellowship Testimonials",
  fields: [
    {
      name: "title",
      title: "Company Name",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "title",
      media: "companyLogo",
    },
  },
};