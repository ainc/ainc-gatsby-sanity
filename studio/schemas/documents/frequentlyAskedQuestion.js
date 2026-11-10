export default {
  name: "frequentlyAskedQuestion",
  title: "Frequently Asked Question",
  type: "document",
  fields: [
    {
      name: "question",
      type: "string",
      title: "Question",
    },
    {
      name: "answer",
      type: "text",
      title: "Answer",
    },
  ],
  preview: {
    select: {
      title: "question",
    },
  },
};
