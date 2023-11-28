import { MdEvent } from "react-icons/md";

export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  icon: MdEvent,
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
      name: 'host',
      type: 'string',
      title: 'Host',
      description: 'The name of the place (ie: Awesome Inc)'
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Enter the address of the event'
    },
    {
      name: 'eventName',
      type: 'string',
      title: 'Event Name'
    },
    {
      name: 'linkToEvent',
      type: 'url',
      title: 'Link to Event',
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture'
    },
    { //Could add multiple different tag lines for different labels (Age, Location, Type of Event)
      name: 'tags',
      type: 'tags',
      title: 'Tags',
      options: {
        //Locks menu from creating new tags (defaults to false)
        frozen: false,
        //Preset of tags (defaults to empty)
        preload: [
          {label: "In Person", value: "in-person"}, 
          {label: "Virtual", value: "virtual"},
          {label: "Entrepreneurship", value: "entrepreneurship"},
          {label: "Self Growth", value: "self-growth"},
          {label: "Business", value: "business"},
          {label: "Competition", value: "competition"},
          {label: "Education", value: "education"},
          {label: "Child", value: "child"},
          {label: "Adult", value: "adult"},
        ],
        //Closes menu after tag selected (defaults to true)
        closeMenuOnSelect: false
      }
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      description: 'Featured events will be displayed first',
      initialValue: false
    },
    {
      title: 'Event Type',
      name: 'reference',
      type: 'reference',
      to: [{type: 'eventTypes'}]
    }
  ],
  // (DONE)TODO: change the preview of date to MMMM D, YYYY | h:mma
  preview: {
    select: {
      title: 'eventName',
      subtitle: 'date',
      media: 'picture'
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
