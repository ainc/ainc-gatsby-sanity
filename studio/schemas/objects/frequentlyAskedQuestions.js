export default {
  name: "frequentlyAskedQuestions",
  title: "Frequently Asked Questions",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "faqs",
      type: "array",
      title: "Questions",
      of: [{ type: "reference", to: [{ type: "frequentlyAskedQuestion" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
