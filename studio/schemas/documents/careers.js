export default {
  name: 'careers',
  type: 'document',
  title: 'Careers',
  fields: [
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
  ],
  preview: {
      select: {
          title: 'title',
          subtitle: 'date',
      },
  }
}