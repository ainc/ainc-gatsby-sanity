import { GiGraduateCap } from "react-icons/gi";

export default {
  name: 'bootcampProfileCard',
  type: 'document',
  title: 'Bootcamp Profile Card',
  icon: GiGraduateCap,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'First Name'
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },
    {
      name: 'text1',
      type: 'string',
      title: 'Text 1'
    },
    {
      name: 'text2',
      type: 'string',
      title: 'Text 2'
    }
  ]
}
