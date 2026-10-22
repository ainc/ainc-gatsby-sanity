import { FaQuestionCircle } from "react-icons/fa";

export default {
  name: "frequentlyAskedQuestions",
  title: "Frequently Asked Questions",
  type: "object",
  icon: FaQuestionCircle,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "For example, Frequently Asked Questions.",
    },
    {
      name: "faqs",
      type: "array",
      title: "Questions",
      description:
        "Pick questions that already exist, or create one. The same question can be used on more than one page.",
      of: [{ type: "reference", to: [{ type: "frequentlyAskedQuestion" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Frequently Asked Questions",
        subtitle: "Frequently asked questions",
        media: FaQuestionCircle,
      };
    },
  },
};
