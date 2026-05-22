import React from "react";
import { FaUser } from "react-icons/fa";
import * as styles from "./workspaceShared.module.scss";

const SIZE_LEVEL = {
  small: 1,
  medium: 2,
  large: 3,
};

const RoomCapacityIcons = ({ size = "small", label }) => {
  const activeCount = SIZE_LEVEL[size] || 1;

  return (
    <div
      className={styles.roomCapacity}
      role="img"
      aria-label={label || `${size} capacity, up to ${activeCount} of 3`}
    >
      <div className={styles.roomCapacityIcons}>
        {[1, 2, 3].map((level) => (
          <FaUser
            key={level}
            className={
              level <= activeCount
                ? styles.roomCapacityIconActive
                : styles.roomCapacityIconMuted
            }
            aria-hidden
          />
        ))}
      </div>
      {label && <span className={styles.roomCapacityLabel}>{label}</span>}
    </div>
  );
};

export default RoomCapacityIcons;
