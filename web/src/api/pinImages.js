import { google } from "googleapis";

/* 
    Function fetches data from Pin database in Awesome Achievements Pin Tracking
    Images are hosted by post image, src stored in sheet
*/
export default async function handler(req, res) {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  const auth = new google.auth.JWT(
    process.env.FIVE_ACROSS_REWARDS_CLIENT_EMAIL,
    null,
    process.env.FIVE_ACROSS_REWARDS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes,
  );

  try {
     if (req.method === "GET") {
        await auth.authorize();
        const sheets = google.sheets({ version: "v4", auth });

        const pinImages = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SECOND_SPREADSHEET_ID,
            range: "'Pin Database'!A2:D",
        });
        console.log("Images", pinImages)

        const imgLinks = (pinImages.data.values || []).map((row) => ({
            pinName: row[0] || "Unnamed", // A
            howToEarn: row[1] || "", // B
            pinCode: row[2] || "", // C
            source: row[3] || "/images/default-pin.png", // D
        }))

        return res.status(200).json({ imgLinks });
    }

    // If not GET 
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.log("Sheets API Error:", error);
    return res.status(500).json({
      error: error.message,
      details: error.errors,
    });
  }
}
