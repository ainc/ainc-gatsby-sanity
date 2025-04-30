export default {
  name: "columnBlock",
  type: "object",
  title: "Column Block",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      description: "Add content blocks that will appear side-by-side",
      of: [
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            {
              name: "content",
              type: "reference",
              title: "Content Block",
              to: [{ type: "hero" }, { type: "cta" }, { type: "textBlock" }],
              validation: (Rule) => Rule.required(),
              options: {
                filter: '_id in path("drafts.**") ',
              },
            },
            {
              name: "width",
              type: "string",
              title: "Column Width",
              description: "Set the width of this column",
              options: {
                list: [
                  { title: "1/4 (25%)", value: "25%" },
                  { title: "1/3 (33%)", value: "33%" },
                  { title: "1/2 (50%)", value: "50%" },
                  { title: "2/3 (66%)", value: "66%" },
                  { title: "3/4 (75%)", value: "75%" },
                  { title: "Full (100%)", value: "100%" },
                ],
                layout: "dropdown",
              },
              initialValue: "50%",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "content.heading",
              subtitle: "content._type",
              width: "width",
              media: "content.backgroundImage",
              contentExists: "content",
            },
            prepare({ title, subtitle, width, media, contentExists }) {
              return {
                title: title || "Untitled Section",
                subtitle: `${subtitle || "No type"} • ${width || "auto"} • ${contentExists ? "Has content" : "MISSING CONTENT"}`,
                media: media?.asset,
              };
            },
          },
        },
      ],
      validation: (Rule) => [
        Rule.min(1).error("At least one section is required"),
        Rule.max(4).warning(
          "Consider fewer sections for better mobile display",
        ),
      ],
    },
    {
      name: "spacing",
      type: "string",
      title: "Column Spacing",
      description: "Space between columns",
      options: {
        list: [
          { title: "Small (16px)", value: "small" },
          { title: "Medium (32px)", value: "medium" },
          { title: "Large (48px)", value: "large" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "medium",
    },
    {
      name: "alignment",
      type: "string",
      title: "Vertical Alignment",
      description: "How columns align vertically",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "top",
    },
    {
      name: "mobileStack",
      type: "boolean",
      title: "Stack on Mobile",
      description: "Should columns stack vertically on mobile devices?",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      sections: "sections",
      spacing: "spacing",
      alignment: "alignment",
    },
    prepare({ sections, spacing, alignment }) {
      const spacingMap = {
        small: "S",
        medium: "M",
        large: "L",
      };

      return {
        title: "Column Block",
        subtitle: [
          `${sections?.length || 0} columns`,
          spacing && `Spacing: ${spacingMap[spacing] || spacing}`,
          alignment && `Align: ${alignment}`,
        ]
          .filter(Boolean)
          .join(" • "),
      };
    },
  },
};
