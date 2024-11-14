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
        }).required()
    },
    {
      name: 'behavior',
      type: 'string',
      title: 'Behavior',
      description: 'Specifies how the link should behave (e.g., open in new tab).',
      options: {
        list: [
          {title: 'Same Tab', value: 'same_tab'},
          {title: 'New Tab', value: 'new_tab'}
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required()
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
