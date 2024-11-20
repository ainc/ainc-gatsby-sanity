import {FaLink} from 'react-icons/fa6'
import link from '../objects/link'

export default {
  name: 'links',
  type: 'document',
  title: 'Links',
  icon: FaLink,
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [link],
      description: 'Add and reorder links as needed.'
    }
  ],
  preview: {
    select: {
      links: 'links'
    },
    prepare (selection) {
      const {links} = selection
      const linkCount = links ? links.length : 0
      return {
        title: `Links (${linkCount})`,
        subtitle: `${linkCount} link${linkCount === 1 ? '' : 's'}`
      }
    }
  }
}
