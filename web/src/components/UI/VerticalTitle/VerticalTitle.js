import React from "react";
import Title from "../Title/Title";

import * as styles from "./VerticalTitle.module.scss";

function VerticalTitle(props) {
  return (
    <div style={{ position: "relative" }}>
      <Title className={styles.verticalTitle}>{props.title}</Title>
    </div>
  );
}

export default VerticalTitle;
