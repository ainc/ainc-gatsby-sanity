export default {
  name: "fellowshipPortfolio",
  type: "document",
  title: "Fellowship Portfolio",
  fields: [
    {
      name: "year",
      type: "date",
      title: "Year",
      description: "Year the fellowship joined",
      options: {
        dateFormat: "YYYY",
      },
    },
    {
      name: "companyName",
      type: "string",
      title: "Company Name",
    },
    {
      name: "companyURL",
      type: "url",
      title: "Company Website",
    },
    {
      name: "fellowshipImage",
      type: "image",
      title: "Fellowship Image",
    },
    {
      name: "description",
      type: "text",
      title: "Company Description",
    },
    {
      name: "status",
      type: "string",
      title: "Status",
      description: "Saved for a later display decision. Not shown on the portfolio page yet.",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "Acquired", value: "acquired" },
          { title: "Shut down", value: "shut-down" },
        ],
        layout: "radio",
      },
      initialValue: "active",
    },
  ],
};
