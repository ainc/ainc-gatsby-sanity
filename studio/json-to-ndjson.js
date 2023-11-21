const fs = require('fs');

// Load JSON data from file
const jsonData = require('./5across_past.json');

const replaceSpecialCharacters = (value, defaultValue) => {
    const specialCharacters = ['???', '#']; 
    return value === undefined || specialCharacters.includes(value) ? defaultValue : value;
};

const eventsData = Object.entries(jsonData.years).flatMap(([year, events]) => {
  return Object.entries(events).flatMap(([eventName,eventData]) => {
    const winnerData = {
        _type: "fiveAcrossWinners",
        WinningDate: year,
        companyTitle: replaceSpecialCharacters(eventData.winner, "Unknown Winner"),
        founderVideo: replaceSpecialCharacters(eventData.url,"https://wwww.youtube.com"),
        founderNames: replaceSpecialCharacters(eventData.founder, "Unknown Founder"),
        

    };
    return [winnerData];
  });
});

const ndjsonArray = eventsData.map(data => JSON.stringify(data)).join('\n');

// Write NDJSON to a file
fs.writeFileSync('output.ndjson', ndjsonArray);

console.log('Conversion successful');
