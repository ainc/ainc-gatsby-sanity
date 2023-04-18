import { MdPerson } from "react-icons/md";

export default {
  name: 'blogAuthor',
  type: 'document',
  title: 'Blog Authors',
//   icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name'
      
    },
    {
        title: 'Job Title',
        name: 'title',
        type: 'string'
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },    
  ],
  preview: {
    select: {
        title: 'name',
        subtitle: 'title',
        media: 'picture'
    },
    prepare(selection) {
      
        const {title, subtitle, media} = selection

        return {
        title: title,
        subtitle: subtitle,
        media: media
        }
    }
    
  }
}
