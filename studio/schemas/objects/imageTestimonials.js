export default {
    type: 'object',
    name: 'imageTestimonials',
    title: 'Image Testimonials',
    fields: [
    {
        name: 'title',
        title: 'Testimonial Title',
        type: 'string',
    },
    {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'image',
    }
    ],
    preview: {
        select: {
          title: 'title',
        }
      }
}