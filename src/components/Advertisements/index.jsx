import React from 'react'
import styles from './style.module.scss'
import Advertisements1 from '../../assets/Advertisements/advertisement-1.svg'
import Advertisements2 from "../../assets/Advertisements/advertisement-2.svg";
const Advertisements = () => {
  return (
    <div className={styles.advertisements}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles["advers-1"]}>
            <img src={Advertisements1} alt="" />
          </div>
          <div className={styles["advers-2"]}>
            <img src={Advertisements2} alt="" />
          </div>
        </div>
        <button className={styles.details}>Daha çox</button>
      </div>
    </div>
  );
}

export default Advertisements