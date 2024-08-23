import { MdPerson } from "react-icons/md";

export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Members',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name'
      
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'teamInfo',
      title: 'Team Member Info',
      type: 'internalTeamMember'
    },
    {
      name: 'priority',
      type: 'array',
      title: 'Member Priority',
      validation: Rule => Rule.required(),
      of: [{type: 'string'}],
      options:{
        layout: 'checkbox',
        list: [
          {title: 'High', value: '0'},
          {title: 'Middle', value: '1'},
          {title: 'Intern', value: '2'}

        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
