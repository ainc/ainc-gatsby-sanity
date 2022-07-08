import { GiBarefoot } from 'react-icons/gi';

export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  icon: GiBarefoot,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Footer',
      hidden: true
    },
    {
      name: 'quicklinks',
      title: 'Quicklinks',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{type: 'link'}],
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{type: 'imageLink'}]
    }
  ]
}