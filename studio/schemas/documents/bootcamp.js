//
export default {
    name: 'bootcamp',
    type: 'document',
    title: 'Bootcamp',

    fields: [
   
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        initialValue: 'Bootcamp',
        hidden: true
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
      }

  
    ]
  }