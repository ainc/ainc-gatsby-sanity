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
      description:
        "Active by default. Choose Acquired or Closed only to flag this company on the portfolio. Clear the field to mark it Active again.",
      options: {
        list: [
          { title: "Acquired", value: "acquired" },
          { title: "Closed", value: "closed" },
        ],
      },
    },
  ],
};
