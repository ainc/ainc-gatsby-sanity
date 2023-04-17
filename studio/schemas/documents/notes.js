export default {
    name: 'notes',
    type: 'document',
    title: 'Notes',
    fields: [
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Title slug',
            options: {
              source: 'title',
              maxLength: 200,
            }
        },
        {
            name: 'age',
            type: 'string',
            title: 'Age',
            options: {
              list: [
                { title: 'Adults', value: 'adults' },
                { title: 'Youth', value: 'youth' },
                { title: 'Other', value: 'other' },
              ],
            },
        },
        {
            name: 'linkToiframe',
            type: 'url',
            title: 'Link to iframe',
            description: 'Add link to iframe here if the body is an iframe',
        },
        {
            name: 'body',
            type: 'array',
            title: 'Body',
            description: 'Body content',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
              },
            ]
        },
    ],
    preview: {
        select: {
          title: 'slug.current',
        },
        prepare(selection) {
          const { title } = selection;
          return {
            title: title,
          };
        },
    }      
      
}