import { MdOutlineTitle } from "react-icons/md";

export default {
  name: "pageTitles",
  title: "Page Titles",
  type: "document",
  icon: MdOutlineTitle,
  fields: [
    {
      name: "filePath",
      title: "Page URL",
      type: "string",
      description: 'The page URL with trailing slash, e.g. "/learn/youth/"',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .regex(/^\/.*\/$/, {
            name: "trailing slash",
            invert: false,
          })
          .error(
            'URL must start and end with forward slashes (e.g. "/learn/youth/")',
          ),
    },
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      description:
        'Title without site prefix (e.g. "Learn to Code" not "Awesome Inc | Learn to Code")',
      validation: (Rule) => Rule.required().min(1).max(60),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description:
        "SEO description for search engines (150-160 characters recommended)",
      validation: (Rule) => Rule.max(160),
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "filePath",
      description: "metaDescription",
    },
    prepare({ title, subtitle, description }) {
      return {
        title: title,
        subtitle: subtitle,
        description: description
          ? `${description.substring(0, 50)}...`
          : "No description",
      };
    },
  },
};
