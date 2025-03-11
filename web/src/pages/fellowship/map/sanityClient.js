// sanityClient.js
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "y716vocf", // Replace with your Sanity project ID
  dataset: "development", // Use the development dataset for testing
  apiVersion: "2023-05-03", // Use the current date in YYYY-MM-DD format
  useCdn: true, // Enable CDN for faster responses
});
