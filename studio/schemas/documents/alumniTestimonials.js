export default {
    name: "alumniTestimonials",
    type: "document",
    title: "Bootcamp Employer Testimonials",
    fields: [
        {
            name: 'company',
            type: 'string',
            title: 'Company Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author',
            validation: Rule => Rule.required()
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: Rule => Rule.required()
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture',
            validation: Rule => Rule.required()
        },
        
]}