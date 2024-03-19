export default {
    name: 'fiveAcrossTestimonials',
    type: 'document',
    title: 'Five Across Testimonials',
    fields: [
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [
            {
              type: "object",
              name: "testimonials",
              fields: [
                { type: "string", name: "title" },
                { type: "image", name: "testimonialImage" }
              ]
            }
        ],
      }
    ],
    preview: {
        select: {
          title: 'Testimonials',
        }
      }
}