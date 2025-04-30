//textBlock.js
export default {
  name: "textBlock",
  type: "object",
  title: "Text Block",
  fields: [
    {
      name: "content",
      type: "array",
      title: "Text Content",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "textAlignment",
      type: "string",
      title: "Text Alignment",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "textColor",
      type: "string",
      title: "Text Color",
      description:
        "Choose text color (defaults to black when no background, white with background)",
      options: {
        list: [
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
          { title: "Dark Gray", value: "#333" },
          { title: "Light Gray", value: "#ccc" },
          { title: "AINC Red", value: "#A03232" },
        ],
        layout: "radio",
      },
    },
  ],
};
