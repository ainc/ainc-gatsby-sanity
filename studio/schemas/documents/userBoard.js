export default {
      name: 'userBoard',
      type: 'document',
      title: 'User Board Layout',
      fields: [
        {
          name: 'userId',
          type: 'string',
          title: 'User ID'
        },
        {
          name: 'boardImage',
          type: 'image',
          title: 'Top-Left Board Image'
        },
        {
          name: 'pinPositions',
          type: 'array',
          title: 'Pins on this board',
          of: [{ type: 'pinPosition' }]
        }
      ]
    }