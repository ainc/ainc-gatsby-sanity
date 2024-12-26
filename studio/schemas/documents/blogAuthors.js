import { MdPerson } from "react-icons/md";

export default {
  name: "blogAuthor",
  type: "document",
  title: "Blog Authors",
  //   icon: MdPerson,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      title: "Job Title",
      name: "title",
      type: "string",
    },
    {
      name: "picture",
      type: "image",
      title: "Picture",
      options: {
        hotspot: true, // Enable hotspot for fine-grained cropping control
        metadata: ["location", "palette"], // Include additional metadata
        storeOriginalFilename: false, // Don't store the original filename
        crop: 1 / 1, // Enable cropping
        // Define cropping aspect ratio, e.g., 16:9
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "picture",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;

      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
};
