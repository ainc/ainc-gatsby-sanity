import { GiGraduateCap } from "react-icons/gi";

export default {
    name: 'bootcampGraduationStats',
    type: 'document',
    title: 'Bootcamp Graduation Stats',
    icon: GiGraduateCap,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'stat',
            type: 'string',
            title: 'Graduation Stat'
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture'
        },
    ]
}