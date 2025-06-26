import { google } from "googleapis";

export default async function handler(req, res) {
  const scopes =
    req.method === "GET"
      ? ["https://www.googleapis.com/auth/spreadsheets.readonly"]
      : ["https://www.googleapis.com/auth/spreadsheets"];

  const auth = new google.auth.JWT(
    process.env.FIVE_ACROSS_REWARDS_CLIENT_EMAIL,
    null,
    process.env.FIVE_ACROSS_REWARDS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes,
  );

  try {
    await auth.authorize();
    const sheets = google.sheets({ version: "v4", auth });

    if (req.method === "GET") {
      // Fetch existing pins
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SECOND_SPREADSHEET_ID,
        range: "'Pin Logs'!A2:M",
      });

      const pins = (response.data.values || []).map((row) => ({
        recipient: row[0]?.trim() || "Unknown", // A
        icon: row[1]?.trim() || "", // B
        pinName: row[2]?.trim() || "Unnamed Pin", // C
        group: row[3]?.trim() || "No Group", // D
        date: row[4] || "", // E
        delivered: row[5] === "TRUE", // F
        story: row[6] || "", // G
        x: parseFloat(row[7]) || null, // H
        y: parseFloat(row[8]) || null, // I
        uniqueId: row[9] || "", // J
        category: row[10] || "", // K
        notes: row[11] || "", // L
        created: row[12] || new Date().toISOString(), // M
      }));

      return res.status(200).json({ pins });
    }

    if (req.method === "POST") {
      const { uniqueId, x, y } = req.body;

      if (!uniqueId || x === undefined || y === undefined) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Find existing row by matching uniqueId to col J (row[9])
      const findResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SECOND_SPREADSHEET_ID,
        range: "'Pin Logs'!A2:M",
      });

      const rows = findResponse.data.values || [];
      const rowIndex = rows.findIndex((row) => row[9] === uniqueId);

      // If not found, return 404
      if (rowIndex === -1) {
        return res.status(404).json({ message: "Pin not found" });
      }

      // Update existing row's H & I columns with new x,y
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.SECOND_SPREADSHEET_ID,
        range: `'Pin Logs'!H${rowIndex + 2}:I${rowIndex + 2}`,
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[x, y]],
        },
      });

      return res.status(200).json({ message: "Position updated" });
    }

    // If not GET or POST
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Sheets API Error:", error);
    return res.status(500).json({
      error: error.message,
      details: error.errors,
    });
  }
}
