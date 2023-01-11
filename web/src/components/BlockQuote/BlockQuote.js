import React from "react";
import * as styles from "./blockquote.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";

const BlockQuote = ({ children }) => {
    return (
      <blockquote className={styles.quote}>
        {children}
      </blockquote>
    )
}

export default BlockQuote;