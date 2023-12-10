/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="bohemian-regular"
      rel="preload"
      href="/fonts/The-Bohemian-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
  ]);
};