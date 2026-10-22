export default {
  name: "pageBuilder",
  title: "Page sections",
  type: "array",
  of: [
    { type: "heroImage" },
    { type: "eventDetails" },
    { type: "textSection" },
    { type: "features" },
    { type: "imageLink" },
    { type: "frequentlyAskedQuestions" },
    { type: "button" },
  ],
};
