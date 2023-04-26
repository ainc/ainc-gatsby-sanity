export default {
    name: 'mentor',
    type: 'document',
    title: 'Mentors',

    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Full Name'
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture'
        },
        {
            name: 'occupation',
            type: 'string',
            title: 'Occupation'
        },
        {
            name: 'linkedIn',
            type: 'url',
            title: 'LinkedIn URL'
        },
    ]
}