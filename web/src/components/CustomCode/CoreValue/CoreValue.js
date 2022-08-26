import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import '../../../styles/main.scss'
import "./CoreValue.scss";

import cultureBookButtonImage from "./culture-book-button.png";
import videoButtonImage from "./video-button.png";


/* 
  TODO: 
    - Fix images that aren't showing up
    - Z-index issue that "hides" element
*/

const CoreValue = (props) => {
  return (
    <figure>
      <figcaption>
        <div class="video-icon">
          <div class="lgx-vertical">
            <a id="video-btn" href="#" data-toggle="modal" data-target="#lgx-modal">
              <img src={videoButtonImage} alt="Core values video" />
            </a>
            <a id="culture-book-btn" href="#" target="_blank" rel="noopener">
              <img src={cultureBookButtonImage} alt="culture book button"/>
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default CoreValue;
