export default {
    name: 'bootcampImageTestimonials',
    type: 'document',
    title: 'Bootcamp Social Media Testimonials',
    fields: [
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of:[{type: 'imageTestimonials'}]
      }
    ],
    preview: {
        select: {
          title: 'Testimonials',
        }
    }
}