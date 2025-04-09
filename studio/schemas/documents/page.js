// In sanity/schemas/page.js
export default {
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [{ type: "hero" }, { type: "cta" }, { type: "button" }],
      options: {
        sortable: true,
        editModal: "dialog",
      },
    },
  ],
};
