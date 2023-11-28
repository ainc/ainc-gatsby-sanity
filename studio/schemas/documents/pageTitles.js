import { MdOutlineTitle } from "react-icons/md";

export default {
    name: "pageTitles",
    title: "Page Titles",
    type: "document",
    icon: MdOutlineTitle,
    fields: [
        {
            name: "filePath",
            title: "Page URL",
            type: "string",
            description: "The page URL, e.g. \"/learn/youth\"",
            validation: Rule => Rule.required().min(1)
        },
        {
            name: "pageTitle",
            title: "Page Title",
            type: "string",
            description: "Every title will be appended with \" | Awesome Inc\"",
            validation: Rule => Rule.required().min(1)
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
            subtitle: 'filePath',
        }
    }
};