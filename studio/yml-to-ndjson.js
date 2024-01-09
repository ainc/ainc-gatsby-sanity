const fs = require('fs');
const yaml = require('js-yaml');

const yamlData = fs.readFileSync('mentors-list.yml', 'utf8');
const jsonData = yaml.load(yamlData);

// Transform the data (change field names)
const transformedData = jsonData.map(entry => ({
    _type: "mentor",
    name: entry.firstname + entry.lastname,
    picture: {"_sanityAsset":"image@file://."+ entry.image,"_type":"image" },
    occupation: entry.company,
    linkedIn: entry.website,
  // ... add more field mappings as needed
}));

// Convert to NDJSON format
const ndjsonData = transformedData.map(entry => JSON.stringify(entry)).join('\n');

// Write to NDJSON file
fs.writeFileSync('output.ndjson', ndjsonData);
