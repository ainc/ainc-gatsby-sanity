import * as React from "react"


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