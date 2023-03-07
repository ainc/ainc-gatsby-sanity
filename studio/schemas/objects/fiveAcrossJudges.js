export default {
    type: 'object',
    name: 'fiveAcrossJudges',
    title: '5 Across Judges',
    fields: [

      {
        title: 'Name of Judge',
        name: 'names',
        type: 'string'
      },
      {
        title: 'Title of Judge',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Accolades',
        name:'accolades',
        type: 'string'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
        description: 'Important for SEO and accessiblity.',
        options: {
          isHighlighted: true
        }
      }
    ],
    preview: {
      select: {
        title: 'asset.nameJudge',
        media: 'image'
      },
      prepare (data) {
        return {
          ...data,
          title: data.title,
          subtitle: data.title && data.title.join('/')
        }
      }
    }
  }