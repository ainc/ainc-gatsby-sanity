const fs = require('fs');

// Load JSON data from file
const jsonData = require('./5across_past.json');

const replaceSpecialCharacters = (value, defaultValue) => {
  const specialCharacters = ['???', '#']; 
  return value === undefined || specialCharacters.includes(value) ? defaultValue : value;
};

const eventDateMap = {
    'Event1': '02',
    'Event2': '04',
    'Event3': '06',
    'Event4': '08',
    'Event5': '10',
    'Finals': '12',
  };
  
  function eventNametoMonth(eventName, year) {
    const dateSuffix = eventDateMap[eventName];
    return dateSuffix ? `${year}-${dateSuffix}` : year;
  }
  

// function eventNametoMonth(eventName, year) {
//   if (eventName === 'Event1') {
//     return year + '- 02';
//   }
//   if (eventName === 'Event2') {
//     return year + '- 04';
//   }
//   if (eventName === 'Event3'){
//     return year + '- 06';
//   }
//   if (eventName === 'Event4'){
//     return year + '- 08';
//   }
//   if (eventName === 'Event5'){
//     return year + '- 10';
//   }
//   if (eventName === 'Finals'){
//     return year + '- 12';
//   }
//   return year;
// }

function formatDate(date) {
//   return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    return date.toISOString().slice(0, 10);}

const eventsData = Object.entries(jsonData.years).flatMap(([year, events]) => {
  return Object.entries(events).flatMap(([eventName, eventData]) => {
    const date = eventNametoMonth(eventName, year);
    const formattedDate = formatDate(new Date(date));
    const winnerData = {
      _type: "fiveAcrossWinners",
      WinningDate: formattedDate,
      companyTitle: replaceSpecialCharacters(eventData.winner, "Unknown Winner"),
      founderVideo: replaceSpecialCharacters(eventData.url, "https://www.youtube.com"),
      FounderNames: replaceSpecialCharacters(eventData.founder, "Unknown Founder"),
    };
    return [winnerData];
  });
});



const ndjsonArray = eventsData.map(data => JSON.stringify(data)).join('\n');

// Write NDJSON to a file
fs.writeFileSync('output.ndjson', ndjsonArray);

console.log('Conversion successful');
