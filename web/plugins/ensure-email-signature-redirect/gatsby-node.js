const fs = require("fs");
const path = require("path");

const FALLBACK = "https://entrepreneurhof.com/induction-dinner/";

function upsertRedirects(publicDir, destUrl) {
  const file = path.join(publicDir, "_redirects");
  const lines = [
    `/email-signature  ${destUrl}  302!`,
    `/email-signature/  ${destUrl}  302!`,
  ];
  const existing = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  const kept = existing
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith("/email-signature"))
    .join("\n");
  fs.writeFileSync(file, `${lines.join("\n")}\n${kept}${kept ? "\n" : ""}`);
}

exports.onPostBuild = async ({ graphql, reporter }) => {
  let destUrl = FALLBACK;
  try {
    const result = await graphql(`
      {
        sanityEmailSignature(_id: { eq: "emailSignature" }) {
          link
        }
      }
    `);
    if (result.data?.sanityEmailSignature?.link) {
      destUrl = result.data.sanityEmailSignature.link;
    }
  } catch (error) {
    reporter.warn(`Email signature redirect: ${error.message}`);
  }

  upsertRedirects(path.join(__dirname, "..", "..", "public"), destUrl);
  reporter.info(`Email signature redirect: /email-signature -> ${destUrl}`);
};
