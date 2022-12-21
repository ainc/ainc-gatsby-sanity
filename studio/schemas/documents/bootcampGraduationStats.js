export default {
    name: 'bootcampGraduationStats',
    type: 'document',
    title: 'Bootcamp Graduation Stats',
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