import { FaEnvelope } from "react-icons/fa";

export default {
  name: "emailSignature",
  type: "document",
  title: "Email Signature Banner",
  __experimental_actions: ["create", "update", "publish"],
  icon: FaEnvelope,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      initialValue: "Email Signature Banner",
      hidden: true,
    },
    {
      name: "image",
      type: "image",
      title: "Banner image",
      description:
        "Used in staff email signatures. Replacing this image does not change the public URL. Publish here, then wait for the website to rebuild.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      type: "string",
      title: "Alt text",
      description: "Describe the banner for accessibility.",
    },
    {
      name: "link",
      type: "url",
      title: "Banner link",
      description:
        "Where the banner goes when clicked. The signature always uses https://awesomeinc.org/email-signature so you can change this destination without editing HTML.",
    },
  ],
};
