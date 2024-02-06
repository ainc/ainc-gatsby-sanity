import { FaChalkboardTeacher } from "react-icons/fa";

export default {
    name: 'mentor',
    type: 'document',
    title: 'Mentors',
    icon: FaChalkboardTeacher,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Full Name',
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture',
            validation: Rule => Rule.required()
        },
        {
            name: 'occupation',
            type: 'string',
            title: 'Occupation',
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'linkedIn',
            type: 'url',
            title: 'LinkedIn URL',
            validation: Rule => Rule.required().min(1)
        },
    ]
}