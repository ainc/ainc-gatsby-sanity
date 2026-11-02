export default {
      name: 'pin',
      type: 'document',
      title: 'Pin',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'type',
          type: 'string',
          title: 'Pin Type (Group)',
          options: {
            list: ['Retreat', 'Anniversary', 'Excellence', 'Misc']
          }
        },
        {
          name: 'size',
          type: 'number',
          title: 'Pin Size (px)',
          initialValue: 80
        },
        {
          name: 'pinImage',
          type: 'image',
          title: 'Pin Image'
        },
        {
          name: 'fallbackColor',
          type: 'string',
          title: 'Fallback Color (if no image)',
          initialValue: '#FF6347'
        }
      ]
    }