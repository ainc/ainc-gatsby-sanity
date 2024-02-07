export default {
    name: 'tutorials',
    type: 'document',
    title: 'Tutorials',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontend will require a slug to be set to be able to show the person',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'body',
            type: 'markdown',
            title: 'Body',
            description: 'Body content',
        },
    ]
}