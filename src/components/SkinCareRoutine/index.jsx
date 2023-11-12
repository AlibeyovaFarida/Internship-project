import React from 'react'
import styles from './style.module.scss'
import Cleaning from '../../assets/SkinCareRoutine/Cleaning.svg'
import TerapyCare from '../../assets/SkinCareRoutine/Terapy-Care.svg'
import ProtectFromSun from '../../assets/SkinCareRoutine/ProtectFromSun.svg'
const SkinCareRoutine = () => {
  return (
    <div className={styles["skin-care-routine"]}>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>Dəri qulluğu rutini</h3>
        <div className={styles.routine}>
          <div className={styles.step}>
            <div className={styles["step-wrapper"]}>
              <img src={Cleaning} alt="" />
            </div>
            <div className={styles["step-desc"]}>
              <h4 className={styles["step-title"]}>1.Addım: Təmizlə</h4>
              <p className={styles["step-explanation"]}>
                Dəri tipinə uyğun təmizləyicilər
              </p>
              <button className={styles["detail-btn"]}>Kəşf et</button>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles["step-wrapper"]}>
              <img src={TerapyCare} alt="" />
            </div>
            <div className={styles["step-desc"]}>
              <h4 className={styles["step-title"]}>
                2. Addım: Müalicə et və qulluq (nəmləndir) et
              </h4>
              <p className={styles["step-explanation"]}>
                Dəri tipinə uyğun qulluq məhsulları
              </p>
              <button className={styles["detail-btn"]}>Kəşf et</button>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles["step-wrapper"]}>
              <img src={ProtectFromSun} alt="" />
            </div>
            <div className={styles["step-desc"]}>
              <h4 className={styles["step-title"]}>3. Addım: Günəşdən qoru</h4>
              <p className={styles["step-explanation"]}>
                Dəri tipinə uyğun Günəş qoruyucuları
              </p>
              <button className={styles["detail-btn"]}>Kəşf et</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkinCareRoutine