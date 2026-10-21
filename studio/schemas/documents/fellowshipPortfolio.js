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
      name: "companyStatus",
      type: "string",
      title: "Company status",
      description: "Optional. Leave blank if the company is still operating.",
      options: {
        list: [
          { title: "Acquired", value: "Acquired" },
          { title: "Exit", value: "Exit" },
          { title: "Folded", value: "Folded" },
        ],
        layout: "dropdown",
      },
    },
  ],
  preview: {
    select: {
      title: "companyName",
      subtitle: "companyStatus",
      media: "fellowshipImage",
    },
  },
};
