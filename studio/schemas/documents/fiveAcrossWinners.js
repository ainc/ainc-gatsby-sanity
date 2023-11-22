export default {
    name: "fiveAcrossWinners",
    type: "document",
    title: "5 Across Winners",
    fields: [
        {
            name: "companyTitle",
            type: "string",
            title: "Company"
        },
        {
            name: "WinningDate",
            type: "date",
            title: "Winning Date",
            description: 'Month and Year Won',
            options: {
                dateFormat: "MMMM YYYY"
            }
        },
        {
            name: "FounderNames",
            title: "Founder Name(s)",
            type: "string",
        },
        {
            name: "founderVideo",
            title: "Video Link",
            type: "url",
            description: 'Will default to the 5 Across youtube playlist if left blank ',
        },
        // {
        //     name: "image",
        //     title: "Image",
        //     type: "image"
        // }

    ],
    orderings: [
        {
          title: 'Winning Date, New',
          name: 'WinningDateDesc',
          by: [
            {field: 'WinningDate', direction: 'desc'}
          ]
        },
        {
            title: 'Winning Date, Old',
            name: 'WinningDateAsc',
            by: [
              {field: 'WinningDate', direction: 'asc'}
            ]
          }
    ],    
    preview: {
        select: {
          title: 'companyTitle',
          subtitle: 'WinningDate',
          // media: 'image'
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
            subtitle: `${month} ${year}`,
            // media: media
          }
        }
      }
}