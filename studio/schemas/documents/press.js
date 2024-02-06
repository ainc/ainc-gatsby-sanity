import { FaR, FaRegNewspaper } from "react-icons/fa6";

export default {
    name: 'press',
    type: 'document',
    title: 'Press',
    icon: FaRegNewspaper,
    fields: [
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            options: {
                dateFormat: 'MMMM D, YYYY',
                timeFormat: 'h:mma'
            }
        },
        {
            name: 'title',
            type: 'string',
            title: 'Press Title',
        },
        {
            name: 'linkToArticle',
            type: 'url',
            title: 'Link to Article',
          },
        {
            name: 'author',
            type: 'string',
            title: 'Author'
        }
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