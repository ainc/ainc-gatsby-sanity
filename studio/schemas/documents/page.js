import { FaRegWindowMaximize } from "react-icons/fa";

export default {
  name: "page",
  title: "Event Landing Page",
  type: "document",
  icon: FaRegWindowMaximize,
  fields: [
    {
      name: "event",
      title: "Event",
      type: "reference",
      to: [{ type: "events" }],
      description:
        "Choose the event this page is for. The hero image, name, date, location, host, tags, and registration link are read from that event.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Page title",
      type: "string",
      description:
        "Shown in the browser tab and in this list. Usually the same as the event name.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Used in the page URL. Short and descriptive, for example weekly-startup-social.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Page sections",
      type: "pageBuilder",
      description:
        "These sections stack in order down the page. Drag a section to move it. Add or remove sections to change the layout.",
    },
  ],
  initialValue: {
    content: [
      {
        _type: "heroImage",
        _key: "hero",
        showRegistrationButton: true,
        buttonLabel: "Register",
      },
      {
        _type: "eventDetails",
        _key: "details",
        details: ["date", "location", "host"],
      },
      {
        _type: "textSection",
        _key: "about",
      },
      {
        _type: "features",
        _key: "features",
      },
      {
        _type: "button",
        _key: "register",
        label: "Register",
        linkSource: "event",
      },
    ],
  },
  preview: {
    select: {
      title: "title",
      eventName: "event.eventName",
      slug: "slug.current",
      media: "event.picture",
    },
    prepare({ title, eventName, slug, media }) {
      return {
        title: title || eventName || "Untitled landing page",
        subtitle: slug ? `/${slug}` : eventName,
        media,
      };
    },
  },
};
