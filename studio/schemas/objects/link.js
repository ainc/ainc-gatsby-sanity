import {FaLink} from 'react-icons/fa6'

export default {
  name: 'link',
  type: 'object',
  title: 'Link',
  icon: FaLink,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The text that will be displayed for the link.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'linkToPage',
      type: 'url',
      title: 'Link To Page',
      description: 'The URL to which the link will navigate.',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https']
        })
    }
  ],
  preview: {
    select: {
      title: 'title',
      linkToPage: 'linkToPage'
    },
    prepare (selection) {
      const {title, linkToPage} = selection
      return {
        title: title,
        subtitle: linkToPage
      }
    }
  }
}
