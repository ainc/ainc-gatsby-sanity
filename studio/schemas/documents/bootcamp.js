//
import { GiGraduateCap } from "react-icons/gi";

export default {
    name: 'bootcamp',
    type: 'document',
    title: 'Bootcamp Dates',
    icon: GiGraduateCap,
    fields: [
   
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        initialValue: 'Bootcamp',
        hidden: true
      },
      {
        name: 'cohort',
        type: 'string',
        title: 'Cohort'
      },
      {
        name: 'abbreviation',
        type: 'string',
        title: 'Abbreviation'
      },
      {
        title: 'Early Application Deadline',
        name: 'earlyApplication',
        type: 'datetime',
        options: {
          dateFormat: 'MMMM D, YYYYp',
          timeFormat: 'HH:mm:ss',
          timeStep: 1,
          calendarTodayLabel: 'Today'
        }
      },
      {
        title: 'Early Registration Deadline',
        name: 'earlyRegistration',
        type: 'datetime',
        options: {
          dateFormat: 'MMMM D, YYYYp',
          timeFormat: 'HH:mm:ss',
          timeStep: 1,
          calendarTodayLabel: 'Today'
        }
      },
      {
        title: 'Final Application Deadline',
        name: 'finalApplication',
        type: 'datetime',
        options: {
          dateFormat: 'MMMM D, YYYYp',
          timeFormat: 'HH:mm:ss',
          timeStep: 1,
          calendarTodayLabel: 'Today'
      }
    }
  
    ]
  }