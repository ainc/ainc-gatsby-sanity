export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'date',
            type: 'date',
            title: 'Date',
            options: {
                dateFormat: 'MMMM D, YYYY',
            }
        },
        {
            title: 'Author',
            name: 'reference',
            type: 'reference',
            to: [{type: 'blogAuthor'}]
        },
        {
            name: 'title',
            type: 'string',
            title: 'Blog Title',
        },
        
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontend will require a slug to be set to be able to show the person',
            options: {
              source: 'title',
              maxLength: 96
            }
        },
        {
            name: 'previewText',
            type: 'string',
            title: 'Preview Text',
            description: 'The text that will show on the main blog page',
            validation: Rule => Rule.required().min(0).max(80)
        },
        {
            name: 'thumbnail',
            type: 'image',
            title: 'Cover Image',
            description: 'The image that will show on the main blog page'
        },
        {
            name: 'body',
            type: 'markdown',
            title: 'Blog body',
            description: 'Blog content',
        },
        
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
            media: 'thumbnail'
        },
        //Show date as MMMM D, YYYY in preview subtitle
        prepare(selection) {
      
            const {title, subtitle, media} = selection
            
            const d = new Date(subtitle)
            let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
            let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
            let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    
            return {
            title: title,
            subtitle: `${month} ${day}, ${year}`,
            media: media
            }
        }
    }
}