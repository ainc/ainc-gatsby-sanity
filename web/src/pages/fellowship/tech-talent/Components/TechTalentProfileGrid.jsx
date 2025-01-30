import * as React from "react";
import * as gridStyles from "./TechTalentProfileGrid.module.scss";
import TechTalentProfileCard from "./TechTalentProfileCard";

const TechTalentProfileGrid = ({ items = [] }) => {
  return (
    <div className={gridStyles.profileGridSection}>
      <div className={gridStyles.profileGridContainer}>
        {items.map((item, index) => {
          if (item.isRedBox) {
            return (
              <div key={index} className={gridStyles.redBox}>
                <div className={gridStyles.redBoxContentWrapper}>
                  <div className={gridStyles.redBoxText}>{item.redBoxText}</div>
                  <div className={gridStyles.redBoxSubtext}>
                    {item.redBoxSubtext}
                  </div>
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
