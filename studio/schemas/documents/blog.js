import { FaBlog } from "react-icons/fa";
export default {
  name: "blog",
  type: "document",
  title: "Blog",
  icon: FaBlog,
  fields: [
    {
      name: "date",
      type: "date",
      title: "Date",
      options: {
        dateFormat: "MMMM D, YYYY",
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: "Author",
      name: "reference",
      type: "reference",
      initialValue: {
        _type: 'reference',
        _ref: '9823d288-f279-4419-8a10-c734fb0267c3'
      },
      to: [{ type: "blogAuthor" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Blog Title",
      validation: (Rule) => Rule.required()
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "You must click the 'generate' button after entering the title in order to create the url for the blog post",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "previewText",
      type: "string",
      title: "Preview Text",
      description: "The text that will show on the main blog page",
      validation: (Rule) => Rule.required().min(0).max(80),
    },
    {
      name: "thumbnail",
      type: "image",
      title: "Cover Image",
      description: "The image that will show on the main blog page",
    },
    {
      name: "body",
      type: "markdown",
      title: "Body",
      description:
        "Body content. If you want to add an image, drag and drop it to the place within the blog you would like it to be.",
        validation: (Rule) => Rule.custom(body => {
          if (!body || body.trim() === ''){
            return 'Missing Blog Content'
          }
          return true
        })
    },
  ],
  orderings: [
    {
      title: "Blog Publish Date",
      name: "blogPublishDate",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "thumbnail",
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