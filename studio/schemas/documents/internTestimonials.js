export default {
    name: 'internTestimonials',
    type: 'document',
    title: 'Intern Testimonials',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Full Name'
      },
      {
        name: 'cohort',
        type: 'string',
        title: 'Cohort'
      },
      {
        name: 'team',
        type: 'string',
        title: 'Team',
        options: {
            list:[
                {title: "Marketing", value: 'marketing'},
                {title: "Video", value: 'video'},
                {title: "Web Development", value: 'development'},
                {title: 'Design', value: 'design'},
            ]
        }
      },
      {
        name: 'picture',
        type: 'image',
        title: 'Picture'
      },
      {
        name: 'testimonial',
        type: 'string',
        title: 'Testimonial'
      }
    ]
  }