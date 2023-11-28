import { FaLink } from "react-icons/fa6";

export default {
    name: 'links',
    type: 'document',
    title: 'Links',
    icon: FaLink,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'linkToPage',
            type: 'url',
            title: 'Link To Page',
        }
    ]
}
