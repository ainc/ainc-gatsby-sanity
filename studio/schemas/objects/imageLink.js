export default {
  name: 'imageLink',
  title: 'Image and Link',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'secondaryImage',
      type: 'image',
      title: 'Secondary Image',
      description: 'Optional logo specifically designed for optimal visibility on dark backgrounds.'
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
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
      description: 'Do you want this image to link somewhere? Leave blank if not.',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Image Caption',
      description: 'In some cases, the rendered image may have a title associated with it.'
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt'
    }
  }
}
