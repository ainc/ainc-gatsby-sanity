const fs = require('fs');
const yaml = require('js-yaml');

const yamlData = fs.readFileSync('press.yml', 'utf8');
const jsonData = yaml.load(yamlData);

// Transform the data (change field names)
const transformedData = jsonData.map(entry => ({
    _type: "press",
    date: entry.date,
    title: entry.title,
    linkToArticle: entry.url,
    author: entry.source,
  // ... add more field mappings as needed
}));

// Convert to NDJSON format
const ndjsonData = transformedData.map(entry => JSON.stringify(entry)).join('\n');

// Write to NDJSON file
fs.writeFileSync('output.ndjson', ndjsonData);