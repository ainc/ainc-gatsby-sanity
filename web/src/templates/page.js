import React from "react";
import { graphql } from "gatsby";

export default function PageTemplate({ data }) {
  const page = data.sanityPage || {};
  return (
    <div>
      <h1>{page.title || "Untitled Page"}</h1>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allSanityPage(filter: { slug: { current: { eq: $slug } } }) {
      nodes {
        id
        title
        slug {
          current
        }
      }
    }
  }
`;
