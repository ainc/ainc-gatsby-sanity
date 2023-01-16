import React from "react";
import * as styles from "./blockquote.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const BlockQuote = ({ children }) => {
    return (
      <blockquote className={styles.quote}>
        <div className={styles.quoteFirst}>
          <FaQuoteLeft />
        </div>
          {children}
        <div className={styles.quoteLast}>
          <FaQuoteRight />
        </div>
      </blockquote>
    )
}

export default BlockQuote;