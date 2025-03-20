// Load variables from `.env` as soon as possible
console.log(process.env.NODE_ENV);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
});

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  flags: {
    // DEV_SSR: true // enable server-side rendering to bypass `netlify build`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-google-spreadsheets",
      options: {
        spreadsheetId: "1C6rqs1o2sY_EDmDQV7yHS8SxulXZ00el3H_7pf7Yp64",
        credentials: {
          type: "service_account",
          project_id: "across-rewards-program",
          private_key_id: "7d7963398895e78e5d7e2121f71366809b9184a7",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2eegVmNJjoqOu\ng/IzpiIviF/abxhCOFvMR48m0fbIToJj9NbBzSHRWu2p0KDt3edw+LtUYHhgVT9c\nZTWef2ktaBaOwgyUjyaUFx8ftp6tDQUyCUIudnYK2VBeCWHj1CesNLAYAE3RH+5w\ncLkZxWNiQK2Un0Zbs36BWBuDRdXfUthhMrcE3L3Dh8QGdkFnAuljQ/sYurTv47sS\ni/mS0w3Izro3bDFpQeGuZfglrdXOwQ+rb6OwHIPO6dVl4o0zzQWZ2V4Wz1BYluc7\nw4x61bPjaNpYajc0Y9vHm9sZbIkQwb4+tQeXr27yfZR1d7kNWuFb8kbWR+SertbV\nEQAZPsepAgMBAAECggEADC26taZLdGbocb9QrO3LnkyFyThc8B5+0fV8smSVCe1j\nenRe2PRt62EcN5c7BmUnCz0uk4UUw6ks32fJ2lg6ltM5njGJUWj0dDHO2/j+QiJ6\nVEqV5i/11OeIG56Yr/H6691gW1m519k/urVrRTMNXQNgEmlG8tvZ95v/yhUhHxR1\nfpkjcxWUcXlVd4qs58nOhvx0txgMhTKCd8xQMHczaMP8bhufdAvh9gcxLhCmYhkJ\nu7Ul4K4M36CKFyZS5JnV0iG5rz8V5qrZW5jbSw5J9R7jza9oBcDt+6OhalhSrEKz\nR8kIBSOFqHBz8lzsI3jx44oJ43fYBuRop61txgFs4QKBgQDm+Q5k65HE/rs1rFT1\n9oUe+JoiHqKUbzk/o2lxSDjtOp0nyKleJ9O3y6l0tNaO98Y1vATtB9A/QSz5CykJ\nbGOdy9kBgKQuHmTWSuufhbh213yOhV61xxzI65c5nBv0E099WnMeYLyrzxPp2Z6C\n4LEHfRAGzbZEp5Xi3fshgy4F1QKBgQDKP5qLNXFkv8dZvjQ7QjZ8S1omfnBoxRVB\nlz04w+g13In+7/ytHWqI0qHfBYLahRM1bcj3ohkkB/pU0pCo8svw/tcNSIQHUa4G\nuxo+buBPdXUUbG8FC9T1y+MXXZusBAm//DxNwVWgm/knV43qaqOvO/Jv8B60wgvA\nkqWlQx7AhQKBgDgy3Ue88ajm+hIjLkDyjI1um8I1hgVr0pgjYKKJmiBOpLJrZppc\nQm10BnU5EwOSUg39A43Q2uCpMRIfnwqF7u8UDGcLL+dwycRCUnZsCOgRomLjHJpK\nKjzQ5ejEjSCkGjE78sqvavi61/OMWb8qgKh7y4x8PR8TT6r1rAcJbgdJAoGBAMOz\n+B9sf2U2DfjRDEmrMH3ljD5javJ2grMNXbhoGXLFDOMb5iy9ojDzYJ8l/hDlZEj3\nCthUim9LKPibKE/TYXS5o+6+lMNgTj1FH4f6UiORTNGOe38ui8uslvotIk25OpYD\nxXaX9fuL8fQXzMNgnTMbluSqPYw7mJOnU5Iu+LrhAoGBALnYH97ojjO1CsGMX0tl\nPARkoSxi30uIZrRLQpzthyM0diYi6oYsniEbBYQwk6EJzpTp9X1LujkDtAdg91TF\nrkQwVAm2LXJcolndgAlXyeZ13JYbSSf4vQE626Ut0/0YA97HrmOrKSjnjTnBD/63\naBxwIdc3bUshiB5x2M5sPtuc\n-----END PRIVATE KEY-----\n",
          client_email:
            "id-a-rewards@across-rewards-program.iam.gserviceaccount.com",
          client_id: "117583428751875259457",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/id-a-rewards%40across-rewards-program.iam.gserviceaccount.com",
          universe_domain: "googleapis.com",
        },
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        placeholder: `dominantColor`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
        graphqlTag: "default",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://anchor.fm/s/81dfae4/podcast/rss`,
        name: `AnchorPodcast`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
  siteMetadata: {
    title: "Awesome Inc",
    description: "Awesome Inc website",
    siteUrl: "https://awesomeinc.org",
  },
};
