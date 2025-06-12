//filter.js
export default {
  name: "filters",
  type: "document",
  title: "Filters",
  icon: () => "🏷️", // Optional: Add an icon
  fields: [
    {
      name: "name",
      type: "string",
      title: "Filter Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    },
  ],
};
