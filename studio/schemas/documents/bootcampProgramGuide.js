import { GiGraduateCap } from "react-icons/gi";

export default {
    name: 'bootcampProgramGuide',
    type: 'document',
    title: 'Bootcamp Program Guide',
    icon: GiGraduateCap,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'bootcampProgramGuide',
            type: 'file',
            title: 'Bootcamp Program Guide',
        }
    ]
}