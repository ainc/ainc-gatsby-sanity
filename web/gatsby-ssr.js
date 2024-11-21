import * as React from "react";
import loadingSVG from "./src/assets/svg/bouncing-circles.svg"


export const onRenderBody = ({ setHeadComponents, setPreBodyComponents, setBodyAttributes, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      key="bohemian-regular"
      rel="preload"
      href="/fonts/The-Bohemian-Regular.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />,
    <link
      key="preloader"
      as="script"
      rel="preload"
      href="/preloader.js"
    />
  ])
  setPreBodyComponents([
    <div key="svgLoader" id="preloader">
      <img src={loadingSVG} />
    </div>
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setPostBodyComponents([
    <script key ="preloaderScript" src="/preloader.js" />
  ])
}

