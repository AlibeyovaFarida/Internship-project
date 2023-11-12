import React from 'react'
import styles from './style.module.scss'
import BiodermaBg from "../../assets/HomePreview/BiodermaBg.svg";
import BiodermaSerum from '../../assets/HomePreview/Bioderma-serum.svg'
import SensibioBg from '../../assets/HomePreview/Sensibio-bg.svg'
import SensibioProduct from '../../assets/HomePreview/sensibio-product.svg'
const HomePreview = () => {
  return (
    <div className={styles["home-preview"]}>
      <div className={styles.container}>
        <div className={styles.pigmentbio}>
          <div className={styles["main-image"]}>
            <img src={BiodermaBg} alt="" />
          </div>
          <div className={styles.serum}>
            <img src={BiodermaSerum} alt="" />
          </div>
          <div className={styles["about-serum"]}>
            <p>
              Ləkəyə qarşı<br/><span className={styles.bold}>Parlaqladıcı</span>{" "}
              qayğı: <br/><span className={styles.blue}>Pigmentbio</span>
            </p>
          </div>
        </div>
        <div className={styles.sensibio}>
          <div className={styles["main-image"]}>
            <img src={SensibioBg} alt="" />
          </div>
          <div className={styles.product}>
            <img src={SensibioProduct} alt="" />
          </div>
          <div className={styles["about-product"]}>
            <p>
              Ləkəyə qarşı <br/><span className={styles.bold}>Parlaqladıcı</span>{" "}
              qayğı:
            </p>
          </div>
          <div className={styles["other-inform"]}>
            <p>Make-up removal</p>
            <h4>Sensibio Micellar water, 1 l</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePreview