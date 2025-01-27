import * as React from "react";
import * as gridStyles from "./TechTalentProfileGrid.module.scss";
import TechTalentProfileCard from "./TechTalentProfileCard";

/**
 * TechTalentProfileGrid
 * Receives an array of items as a prop (property). Each item can have:
 *   - name, department, link for normal cards
 *   - isRedBox, redBoxText, redBoxSubtext for the special red box
 */

const TechTalentProfileGrid = ({ items = [] }) => {
  return (
    <div className={gridStyles.profileGridSection}>
      <div className={gridStyles.profileGridContainer}>
        {items.map((item, index) => {
          if (item.isRedBox) {
            return (
              <div key={index} className={gridStyles.redBox}>
                <div className={gridStyles.redBoxText}>{item.redBoxText}</div>
                <div className={gridStyles.redBoxSubtext}>
                  {item.redBoxSubtext}
                </div>
              </div>
            );
          }
          return <TechTalentProfileCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TechTalentProfileGrid;
