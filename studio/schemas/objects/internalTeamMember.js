export default {
  type: 'object',
  name: 'internalTeamMember',
  title: 'Ainc Internal Team Member',
  fields: [
    {
      title: 'Team',
      type: 'array',
      name: 'teams',
      of: [{type: 'string'}],
      options: {
        layout: 'checkbox',
        list: [
          {title: 'Design', value: 'design'},
          {title: 'Development', value: 'development'},
          {title: 'Video', value: 'video'},
          {title: 'Marketing', value: 'marketing'}
        ]
      }
    },
    {
      title: 'Job Title',
      name: 'title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      personName: 'teamMember.name',
      roles: 'roles',
      media: 'teamMember.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join('/')
      }
    }
  }
}
