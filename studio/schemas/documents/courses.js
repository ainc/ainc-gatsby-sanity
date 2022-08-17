export default {
    name: "courses",
    type: "document",
    title: "Courses",
    fields: [
        {
            name: 'courseTitle',
            type: 'string',
            title: 'Course Title',
        },
        {
            name: 'courseType',
            type: 'string',
            options: {
                list: [
                  {title: 'Adult', value: 'adult'},
                  {title: 'Youth', value: 'youth'}
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              },
            validation: Rule => Rule.required()
        },
        {
            name: 'courseImage',
            type: 'image',
            title: 'Course'
        },
        {
            name: 'courseLink',
            type: 'url',
            title: 'Course Link',
        },
        {
            name: 'courseSeason',
            type: 'string',
            title: 'Course Season'
        },
        {
            name: 'format',
            type: 'string',
            title: "Format",
        },
        {
            name: 'topics',
            type: 'string',
            title: 'Topics',
        },
        {
            name: 'technologies',
            type: 'string',
            title: "Technologies",
        },
        {
            name: 'startDate',
            type: 'date',
            title: "Start Date",
            options: {
                dateFormat: 'MM/DD/YYYY',
            },
            validation: Rule => Rule.required().min()
        },
        {
            name: 'endDate',
            type: 'date',
            title: 'End Date',
            options: {
                dateFormat: 'MM/DD/YYYY',
            },
            validation: Rule => Rule.required().min()
        },
        {
            name: 'schedule',
            type: 'string',
            title: 'Schedule'
        },
        {
            name: 'designedFor',
            type: 'string',
            title: 'Designed For',
        },
        {
            name: 'learnMore',
            type: 'string',
            title: "Learn More"
        },
    ]

}