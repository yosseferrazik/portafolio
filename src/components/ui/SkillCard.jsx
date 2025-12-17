import React from "react";

import styles from "./SkillCard.module.css";

const SkillCard = ({ width = "50px", height = "50px", children, icon }) => {
  return (
    <div className={styles.card} style={{ width: width, height: height }}>
      <div className={styles.icon}>{icon}</div>
      <div>{children}</div>
    </div>
  );
};

export default SkillCard;
