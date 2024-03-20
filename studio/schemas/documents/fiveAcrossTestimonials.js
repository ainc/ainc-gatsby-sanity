export default {
    name: 'fiveAcrossTestimonials',
    type: 'document',
    title: 'Five Across Testimonials',
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