const fs = require("fs");

// Load environment variables from .env (if using dotenv)
require("dotenv").config();

// Read template JSON
const template = fs.readFileSync("test-scoreboard-template.json", "utf-8");

// Replace placeholders with actual environment variables
const filledJson = template
  .replace("ENV_PRIVATE_KEY_ID", process.env.FIVEACROSS_SCOREBOARD_KEY_ID)
  .replace("ENV_PRIVATE_KEY", process.env.FIVEACROSS_SCOREBOARD_KEY.replace(/\\n/g, "\n"))
  .replace("GOOGLE_CLOUD_EMAIL,", Process.env.GOOGLE_CLOUD_EMAIL);


// Write the new JSON file
fs.writeFileSync("test-scoreboard-credentials.json", filledJson);

console.log("✅ Credentials file generated: test-scoreboard-credentials.json");
