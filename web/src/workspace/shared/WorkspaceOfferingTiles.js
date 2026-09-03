import React from "react";
import { Link } from "gatsby";
import { HUB_OFFERINGS } from "../data/pageContent";
import * as styles from "./workspaceShared.module.scss";

const WorkspaceOfferingTiles = () => (
  <div className={styles.offeringGrid}>
    {HUB_OFFERINGS.map((item) => (
      <Link key={item.path} to={item.path} className={styles.offeringTile}>
        <img
          src={item.image}
          alt={item.imageAlt || item.title}
          className={styles.offeringTileBg}
        />
        <div className={styles.offeringTileContent}>
          <h3 className={styles.offeringTileTitle}>{item.title}</h3>
          <p className={styles.offeringTileText}>{item.description}</p>
          <span className={styles.offeringTileArrow}>Explore →</span>
        </div>
      </Link>
    ))}
  </div>
);

export default WorkspaceOfferingTiles;
