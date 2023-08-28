// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  flags: {
    DEV_SSR: true // enable server-side rendering to bypass `netlify build`
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    { 
      resolve: 'gatsby-plugin-sharp',
      options: {
        placeholder: `dominantColor`,
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
        graphqlTag: 'default',
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://anchor.fm/s/81dfae4/podcast/rss`,
        name: `AnchorPodcast`,
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg`
        }
      }
    },
  ],
  siteMetadata: {
    title: "Awesome Inc",
    description: "Awesome Inc website",
    siteUrl: "https://awesomeinc.org",
  },
  
}
