export default {
    name: 'whatWeDo',
    type: 'document',
    title: 'What We Do Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            options: {
                list: [
                  {title: 'Entrepreneurship', value: 'entrepreneurship'},
                  {title: 'Technology', value: 'technology'},
                  {title: 'Other Programs', value: 'other'},
                ], 
                layout: 'radio'
              },
            validation: Rule => Rule.required()
        },
        {
            name: 'linkToPage',
            type: 'url',
            title: 'Link To Page',
        }
    ]
}