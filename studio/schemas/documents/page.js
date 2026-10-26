import { FaRegWindowMaximize } from "react-icons/fa";
import FixedLeadSectionsInput from "../../components/FixedLeadSectionsInput";

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
        "Choose the event this page is for. Each event can only have one landing page. The hero image, name, date, location, host, tags, and registration link are read from that event.",
      validation: (Rule) =>
        Rule.required().custom(async (value, context) => {
          const eventId = value?._ref;
          if (!eventId) return true;

          const id = context.document?._id?.replace(/^drafts\./, "");
          const existingTitle = await context
            .getClient({ apiVersion: "2023-01-01" })
            .fetch(
              `*[_type == "page" && event._ref == $eventId && !(_id in [$id, $draftId])][0].title`,
              { eventId, id, draftId: `drafts.${id}` },
            );

          if (!existingTitle) return true;
          return `This event already has a landing page (${existingTitle}).`;
        }),
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
        "The hero is always first and the event details bar is always second. Sections you add after those can be dragged to change their order.",
      components: {
        input: FixedLeadSectionsInput,
      },
      validation: (Rule) =>
        Rule.custom((items) => {
          if (!Array.isArray(items) || items.length < 2) {
            return "The hero and event details must be the first two sections.";
          }
          if (
            items[0]?._type !== "heroImage" ||
            items[1]?._type !== "eventDetails"
          ) {
            return "The hero must be first and the event details must be second.";
          }
          return true;
        }),
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
