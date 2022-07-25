export default {
  name: 'accomplishments',
  type: 'document',
  title: 'Accomplishments',
  __experimental_actions: [
    'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Accomplishments Header',
      hidden: true
    },
    {
      name: 'header',
      type: 'string',
      title: 'Section Header'
    },
    {
      name: 'accomplishment1',
      type: 'image',
      title: 'Accomplishment 1'
    },
    {
      name: 'accomplishment2',
      type: 'image',
      title: 'Accomplishment 2'
    },
    {
      name: 'accomplishment3',
      type: 'image',
      title: 'Accomplishment 3'
    }
  ]
}
