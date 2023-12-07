import React from "react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import * as styles from "./blockquote.module.scss";

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