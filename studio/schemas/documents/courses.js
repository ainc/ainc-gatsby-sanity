export default {
    name: "courses",
    type: "document",
    title: "Courses",
    fields: [
        {
            name: 'courseTitle',
            type: 'string',
            title: 'Course Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Course Picture',
            validation: Rule => Rule.required()
        },
        {
            name: 'background',
            type: 'image',
            title: 'Course Background Image',
            validation: Rule => Rule.required()
        },
        {
            name: 'background',
            type: 'image',
            title: 'Course Background Image',
            validation: Rule => Rule.required()
        },
        {
            name: 'courseLink',
            type: 'url',
            title: 'Course Link',
        },
        {
            name: 'externalLink',
            type: 'url',
            title: 'External Link',
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
            name: 'timeRequirement',
            type: 'string',
            options: {
                list: [
                  {title: 'Full-Time', value: 'full-time'},
                  {title: 'Part-Time', value: 'part-time'}
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              },
            validation: Rule => Rule.required()
        },
        {
            name: 'ageGroup',
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
            name: 'topics',
            type: 'string',
            title: 'Topics',
        },
        {
            name: 'courseType',
            type: 'string',
            options: {
                list: [
                  {title: 'Coding', value: 'coding'},
                  {title: 'Other', value: 'other'}
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              },
            validation: Rule => Rule.required()
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
                dateFormat: 'MM/DD',
            },
            validation: Rule => Rule.required().min()
        },
        {
            name: 'endDate',
            type: 'date',
            title: 'End Date',
            options: {
                dateFormat: 'MM/DD',
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
        {
            title: 'Featured',
            name: 'featured',
            type: 'boolean',
            description: 'This determines if this course will show up on the homepage. Note: there are only three that can be displayed on the homepage.'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            description: 'Please keep this 2-3 sentences.'
        }
    ],
    preview: {
        select: {
            title: 'courseTitle',
            subtitle: 'courseSeason',
            media: 'picture'
        }
       
    }

}