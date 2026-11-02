import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import { useMemo } from "react";

export const usePageTitle = (explicitTitle) => {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query PageTitleQuery {
      site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
        title
        description
        keywords
        author {
          name
        }
      }
      allSanityPageTitles {
        edges {
          node {
            filePath
            pageTitle
            metaDescription
          }
        }
      }
    }
  `);

  const { pageTitle, pageMetaDescription } = useMemo(() => {
    if (explicitTitle) {
      const trimmedTitle =
        explicitTitle.length > 60
          ? explicitTitle.slice(0, 57).trim() + "..."
          : explicitTitle;

      // Development warning
      if (process.env.NODE_ENV === "development" && explicitTitle.length > 60) {
        console.warn(
          `[SEO] Trimmed explicit title: "${explicitTitle}" → "${trimmedTitle}"`,
        );
      }

      return { pageTitle: trimmedTitle, pageMetaDescription: null };
    }

    // Normalize path (handle both with/without trailing slash)
    const currentPath = location.pathname.endsWith("/")
      ? location.pathname
      : location.pathname + "/";

    const matchedPage = data.allSanityPageTitles.edges.find(
      (page) => page.node.filePath === currentPath,
    );

    const rawTitle = matchedPage?.node?.pageTitle || "Awesome Inc";
    const trimmedTitle =
      rawTitle.length > 60 ? rawTitle.slice(0, 57).trim() + "..." : rawTitle;

    // Development warning
    if (process.env.NODE_ENV === "development" && rawTitle.length > 60) {
      console.warn(
        `[SEO] Trimmed page title: "${rawTitle}" → "${trimmedTitle}"`,
      );
    }

    return {
      pageTitle: trimmedTitle,
      pageMetaDescription: matchedPage?.node?.metaDescription || null,
    };
  }, [explicitTitle, location.pathname, data]);

  const siteTitle = data.site?.title || "Awesome Inc";
  const siteDescription = data.site?.description || "";
  const siteAuthor = data.site?.author?.name || "";
  const siteKeywords = data.site?.keywords || [];

  return {
    pageTitle,
    siteTitle,
    siteDescription,
    siteAuthor,
    siteKeywords,
    pageMetaDescription,
  };
};
