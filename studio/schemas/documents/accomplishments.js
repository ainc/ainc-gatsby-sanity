export default {
  name: "accomplishments",
  type: "document",
  title: "Accomplishments",
  __experimental_actions: [
    "create",
    "update",
    // 'delete',
    "publish",
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Accomplishments",
      hidden: true,
    },
    {
      name: "header",
      type: "string",
      title: "Section Header",
    },
    {
      name: "accomplishment1",
      type: "image",
      title: "Accomplishment 1",
    },
    {
      name: "accomplishment1Link",
      type: "url",
      title: "Link for Accomplishment 1",
    },
    {
      name: "accomplishment2",
      type: "image",
      title: "Accomplishment 2",
    },
    {
      name: "accomplishment2Link",
      type: "url",
      title: "Link for Accomplishment 2",
    },
    {
      name: "accomplishment3",
      type: "image",
      title: "Accomplishment 3",
    },
    {
      name: "accomplishment3Link",
      type: "url",
      title: "Link for Accomplishment 3",
    },
    {
      name: "reviewVideo",
      type: "url",
      title: "Link to Year in Review Video",
      description: "Must be the youtube embed link",
    },
    {
      name: "impactReport",
      type: "url",
      title: "Link to Impact Report",
    },
    {
      name: "reviewPoster",
      type: "url",
      title: "Link to Year in Review Poster",
    },
  ],
};
