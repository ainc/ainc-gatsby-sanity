import fs from "fs";
import path from "path";

/*
 *  File: Punycode Patch
 *  Code leveraged from https://github.com/nodemailer/nodemailer/issues/1599
 *  Deprecation warning from punycode means path has to be resolved from local files
 *  File successfully removes these warnings
 *  
 *  TO GET PATH FILE:
 *  run $ NODE_OPTIONS='--trace-deprecation' gatsby develop
 *  Will return error with path file like in example
 *  Ex.
 *  x  at Module.require (node:internal/modules/cjs/loader:1340:12)
 *  at require (node:internal/modules/helpers:141:16)
 *  at Object.<anonymous> (/Users/clarkconrad/projects/ainc-gatsby-sanity/node_modules/node-fetch/node_modules/tr46/index.js:3:16)
 *  Copy this part "/node_modules/node-fetch/node_modules/tr46/index.js" and add it to the array
 */

const pathArray = [
  "./node_modules/tough-cookie/lib/cookie.js",
  "./node_modules/is-valid-domain/example/dist/bundle.js",
  "./node_modules/is-valid-domain/example/main.js",
  "./node_modules/uri-js/dist/esnext/schemes/mailto.js",
  "./node_modules/uri-js/dist/esnext/uri.js",
  "./node_modules/tr46/index.js",
  "./node_modules/@turist/fetch/dist/index.js",
  "./node_modules/create-gatsby/lib/index.js",
  "./node_modules/@parcel/reporter-dev-server/lib/ServerReporter.js",
  "./node_modules/node-fetch/node_modules/whatwg-url/lib/url-state-machine.js",
  "./node_modules/google-spreadsheet/node_modules/whatwg-url/lib/url-state-machine.js",
  "./node_modules/node-fetch/node_modules/tr46/index.js",
  "./node_modules/google-spreadsheet/node_modules/tr46/index.js",
  "./node_modules/gensync/index.js",
];

for (const [_i, value] of pathArray.entries()) {
  try {
    // Read the content of the file
    const tr46Path = path.resolve(value);
    const content = fs.readFileSync(tr46Path, "utf8");
    replace(content, tr46Path);
    console.log(`punycode successfully patched ${value}`);
  } catch (error) {
    console.error(`punycode error patching ${value}`, error);
  }
}

/**
 * Replaces all occurrences of a specific line in the content and writes the updated content to a file.
 * @param {string} content - The original content.
 * @param {string} tr46Path - The path of the file to write the updated content to.
 */
function replace(content, tr46Path) {
  content = content.replace(/("punycode")/g, '("punycode/")');
  writeTheFile(content, tr46Path);
}

/**
 * Writes the modified content back to the file.
 *
 * @param {string} content - The modified content to write.
 * @param {string} tr46Path - The path of the file to write to.
 */
function writeTheFile(content, tr46Path) {
  fs.writeFileSync(tr46Path, content, "utf8");
}
