import { GiGraduateCap } from "react-icons/gi";

export default {
  name: 'bootcampAlumni',
  type: 'document',
  title: 'Bootcamp Alumni',
  icon: GiGraduateCap,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Full Name'
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },
    {
      name: 'github',
      type: 'string',
      title: 'GitHub'
    },
    {
      name: 'portfolio',
      type: 'string',
      title: 'Portfolio'
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'LinkedIn'
    },
    {
      name: 'class',
      type: 'reference',
      title: 'Class',
      to: [{type: 'bootcampClass'}]
    },
    {
      name: 'job',
      type: 'string',
      title: 'Job'
    }
  ],
  orderings: [
    {
      title: 'Graduation Date (newest first)',
      name: 'graduationDateDesc',
      by: [
        {field: 'class.date', direction: 'desc'}
      ]
    },
    {
      title: 'Graduation Date (oldest first)',
      name: 'graduationDateAsc',
      by: [
        {field: 'class.date', direction: 'asc'}
      ]
    }
  ]
}
