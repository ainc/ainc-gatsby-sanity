export default {
  name: "fiveAcrossSponsors",
  type: "document",
  title: "5 Across Sponsors",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "5 Across Sponsors",
      hidden: true,
    },
    {
      name: "titleSp",
      title: "Title Sponsor",
      type: "imageLink",
    },
    {
      name: "presentingSp",
      title: "Presenting Sponsor",
      type: "imageLink",
    },
    {
      name: "suppourtingSponsors",
      type: "array",
      title: "Supporting Sponsor(s)",
      of: [{ type: "imageLink" }],
    },
  ],
};
