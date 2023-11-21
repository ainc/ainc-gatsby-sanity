const fs = require('fs');
const matter = require('gray-matter');

// Directory path containing MD files
const mdDirectory = "./_fellowship_portfolio/";

// Array to store the extracted data
const data = [];

// Read the files within the directory
const fileNames = fs.readdirSync( mdDirectory);

// Process each MD file
fileNames.forEach((fileName) => {
  // Check if the file has an MD extension
  if (fileName.endsWith('.md')) {
    // Read the MD file content
    const filePath = mdDirectory + fileName;
    const mdContent = fs.readFileSync(filePath, 'utf8');

    // Parse the front matter and content from the MD file using gray-matter
    const { data: frontmatter, content } = matter(mdContent);

    const jsonData = {
        _type: "fellowshipPortfolio",
        year: frontmatter.date,
        companyName: frontmatter.company,
        companyURL: frontmatter.website,
        fellowshipImage:{"_sanityAsset":"image@file://../web/src"+ frontmatter.logo,"_type":"image" },
        description: content
    };
    data.push(jsonData)
  }
});

const ndjsonContent = data.map((item) => JSON.stringify(item)).join(`\n`);

const ndjsonFilePath = './output.ndjson';
fs.writeFileSync(ndjsonFilePath, ndjsonContent);
console.log('Conversion completed successfully')