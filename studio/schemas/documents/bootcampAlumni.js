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
      type: 'url',
      title: 'GitHub'
    },
    {
      name: 'portfolio',
      type: 'url',
      title: 'Portfolio'
    },
    {
      name: 'linkedin',
      type: 'url',
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
    },
    {
      name: 'featuredAlumni',
      type: 'boolean',
      title: 'Featured Alumni',
      description: "By checking this box, this alumni will be featured on the bootcamp page. Ensure that a corresponding 'company logo' is included below."
    },
    {
      name: 'jobTitle',
      type: 'string',
      title: 'Job Tile',
      validation: rule => rule.required().when(data => data.featuredAlumni === true)
    },
    {
      name: 'companyLogo',
      type: 'image',
      title: 'Company Logo',
      validation: rule => rule.required().when(data => data.featuredAlumni === true)
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
