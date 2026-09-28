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

function writeRedirectPage(publicDir, destUrl) {
  const safe = String(destUrl).replace(/"/g, "");
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting</title>
    <meta http-equiv="refresh" content="0;url=${safe}" />
    <script>location.replace("${safe}");</script>
  </head>
  <body>
    <a href="${safe}">Continue</a>
  </body>
</html>
`;
  const dir = path.join(publicDir, "email-signature");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

exports.onPostBuild = async ({ graphql, reporter, store }) => {
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

  const publicDir = path.join(store.getState().program.directory, "public");
  upsertRedirects(publicDir, destUrl);
  writeRedirectPage(publicDir, destUrl);
  reporter.info(`Email signature redirect: /email-signature -> ${destUrl}`);
};
