export default {
  name: 'careers',
  type: 'document',
  title: 'Careers',
  fields: [
      {
          name: 'active',
          type: 'boolean',
          title: 'Active',
          description: 'Is this position actively hiring?',
          initialValue: false
      },
      {
          name: 'careerTitle',
          type: 'string',
          title: 'Career title',
      },
      {
          name: 'manager',
          type: 'string',
          title: 'Career Manager'
      },
      {
        name: 'manager_email',
        type: 'email',
        title: 'Career Manager Email'
      },
      {
          name: 'body',
          type: 'array',
          title: 'Career body',
          description: 'Career content',
          of: [
            {
              type: 'block'
            }
          ]
      },
      {
        name: 'linkToForm',
        type: 'url',
        title: 'Link To Application Form',
      },
  ],
  preview: {
      select: {
          title: 'careerTitle',
          subtitle: 'active',
      },
      prepare(selection) {
          const {title, subtitle} = selection
          return {
            title: title,
            subtitle: subtitle ? 'Active' : 'Inactive',
          }
      }
  }
}