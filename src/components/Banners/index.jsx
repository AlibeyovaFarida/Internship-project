import React from "react";
import styles from "./style.module.scss";
import SunCream from "../../assets/Banners/SunCream.svg";
const Banners = () => {
  return (
    <div className={styles["banners"]}>
      <div className={styles.container}>
        <div className={styles["banner-image"]}>
          <img src={SunCream} alt="" />
        </div>
        <div className={styles["banner-text"]}>
          <p className={styles.discount}>MEGA DISCOUNT OF THE MONTH</p>
          <div className={styles.line}></div>
          <span className={styles["discount-amount"]}>
            UP TO <span className={styles.bold}>30%</span> OFF
          </span>
          <span className={styles.category}>Make-up removal</span>
          <p className={styles["desc"]}>Sensibio Micellar water, 1 l</p>
        </div>
      </div>
    </div>
  );
};

export default Banners;
