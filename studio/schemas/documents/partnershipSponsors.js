export default {
  name: "partnershipSponsors",
  type: "document",
  title: "Partnership Sponsors",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "logo", type: "image", title: "Logo" },
    {
      name: "position",
      type: "string",
      title: "Position in Grid",
      options: {
        list: [
          { title: "Left Column", value: "left" },
          { title: "Right Column", value: "right" },
          { title: "Bottom Row", value: "bottom" },
        ],
      },
    },
    {
      name: "order",
      type: "number",
      title: "Order",
    },
  ],
};
