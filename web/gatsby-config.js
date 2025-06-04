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
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-google-spreadsheets",
      options: {
        spreadsheetId: process.env.FIVE_ACROSS_REWARDS_SPREADSHEET_ID,
        credentials: {
          type: "service_account",
          project_id: process.env.FIVE_ACROSS_REWARDS_PROJECT_ID,
          private_key_id: process.env.FIVE_ACROSS_REWARDS_PRIVATE_KEY_ID,
          private_key: process.env.FIVE_ACROSS_REWARDS_PRIVATE_KEY.replace(
            /(\\r)|(\\n)/g,
            "\n",
          ),
          client_email: process.env.FIVE_ACROSS_REWARDS_CLIENT_EMAIL,
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
    // {
    //   resolve: "gatsby-plugin-sharp",
    //   options: {
    //     placeholder: `dominantColor`,
    //   },
    // },
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
