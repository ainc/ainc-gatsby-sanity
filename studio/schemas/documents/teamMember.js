import { MdPerson } from "react-icons/md";

export default {
  name: "teamMember",
  type: "document",
  title: "Team Members",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontend will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "teamInfo",
      title: "Team Member Info",
      type: "internalTeamMember",
    },
    {
      name: "startDate",
      type: "date",
      title: "Start Date",
    },
    {
      name: "priority",
      type: "string",
      title: "Member Priority",
      validation: (Rule) => Rule.required(),
      options: {
        layout: "radio",
        list: [
          { title: "Highest", value: "-1" },
          { title: "High", value: "0" },
          { title: "Middle", value: "1" },
          { title: "Intern", value: "3" },
        ],
      },
    },
    {
      name: "onlyShownOnAchievementsPage",
      type: "boolean",
      title: "Only shown on the achievements page",
      description:
        "If this is checked, the member will only be shown on the achievements page; they will be excluded from the about page.",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
