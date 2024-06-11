export default {
    name: 'notes',
    type: 'document',
    title: 'Notes',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Title of the note',
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'This will be the URL of the note',
            options: {
              source: 'title',
              maxLength: 96
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
                type: 'block',
                marks: {
                  annotations: [
                    {
                      name: 'internalLink',
                      type: 'object',
                      title: 'Internal Link',
                      fields: [
                        {
                          title: 'Anchor ID',
                          name: 'anchorId',
                          type: 'string'
                        }
                      ]
                    }
                  ]
                }
              },
              {
                type: 'image',
              },
              {
                type: 'object',
                name: 'anchor',
                title: 'Anchor',
                fields: [
                  {
                    title: 'ID',
                    name: 'id',
                    type: 'string'
                  }
                ]
              }
            ]
        },
    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'slug.current'
        },
        prepare(selection) {
          const { title, subtitle } = selection;
          return {
            title: title,
            subtitle: `/notes/${subtitle}`
          };
        },
    }      
      
}