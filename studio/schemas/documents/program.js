export default {
    name: 'program',
    type: 'document',
    title: '5A Program Guide',
    __experimental_actions: [
        'create',
        'update',
        'delete',
        'publish'
    ],
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            initialValue: 'Program',
            hidden: true
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            options: {
                dateFormat: 'MMMM D, YYYY'
            },
            of: [{type: 'link'}]
        },
        {
            name: 'teams',
            type: 'array',
            title: 'Teams',
            of: [{type: 'imageLink'}]
        },
        {
            name: 'judges',
            type: 'array',
            title: 'Judges',
            of: [{type: 'imageLink'}]
        },
        {
            name: 'podcasts',
            type: 'array',
            title: 'Podcasts',
            of: [{type: 'imageLink'}]
        }
        
    ]
}