
 export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Link',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'This is the text for the link'
    },
    {
      title: 'Does this link open in a new window?',
      name: 'behavior',
      type: 'boolean',
      initialValue: false
    }
  ]
}
