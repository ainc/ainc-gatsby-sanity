import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "y716vocf",
  dataset: process.env.GATSBY_SANITY_DATASET || "development",
  apiVersion: "2025-04-02",
  useCdn: false,
  token: process.env.SANITY_WRITE,
});
