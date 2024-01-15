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
                {title: "Marketing", value: 'Marketing'},
                {title: "Video", value: 'Video'},
                {title: "Web Development", value: 'Web Development'},
                {title: 'Design', value: 'Design'},
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