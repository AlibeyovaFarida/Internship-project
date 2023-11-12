import React from 'react'
import styles from './style.module.scss'
import BiodermaLogo from '../../assets/Brends/Bioderma.svg'
import Esthederm from '../../assets/Brends/Esthederm.svg'
import Etatpur from '../../assets/Brends/etat-pur.svg'
const OpenProductCategories = ({ isShowMenu, setIsShowMenu }) => {
  return (
    <div
      className={styles["open-product-menu"]}
      onMouseOver={() => setIsShowMenu(true)}
      onMouseOut={() => setIsShowMenu(false)}
    >
      <div className={styles.container}>
        <div className={styles.bioderma}>
          <div className={styles["bioderma-logo"]}>
            <img src={BiodermaLogo} alt="" />
          </div>
          <ul className={styles["bioderma-product-list"]}>
            <li>
              <h5 className={styles["product-title"]}>Atoderm -</h5>
              <p className={styles["product-desc"]}>
                Quru, çox quru və atopik dəri üçün qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Sebium -</h5>
              <p className={styles["product-desc"]}>
                Qarışıq, yağlı və akneyə meyilli dəri üçün qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Sensibio -</h5>
              <p className={styles["product-desc"]}>
                Həssas və qızartılı dəri üçün qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Pigmentbio -</h5>
              <p className={styles["product-desc"]}>
                Ləkəli və ləkəyə meyilli dəri üçün qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Hydrabio -</h5>
              <p className={styles["product-desc"]}>Nəmsiz dəri üçün qulluq</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Photoderm -</h5>
              <p className={styles["product-desc"]}>Günəş qoruyucuları</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Node -</h5>
              <p className={styles["product-desc"]}>
                Saç və saç dərisi üçün qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>ABCDerm -</h5>
              <p className={styles["product-desc"]}>
                Körpələr və uşaqlar üçün qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Cicabio -</h5>
              <p className={styles["product-desc"]}>Zədələnmiş dəri</p>
            </li>
          </ul>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.esthederm}>
          <div className={styles["esthederm-logo"]}>
            <img src={Esthederm} alt="" />
          </div>
          <ul className={styles["esthederm-product-list"]}>
            <li>
              <h5 className={styles["product-title"]}>Osmoclean -</h5>
              <p className={styles["product-desc"]}>Təmizləyici vasitələr</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Celullar Water -</h5>
              <p className={styles["product-desc"]}>Hüceyrə daxili qulluq</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Intensive Molecular -</h5>
              <p className={styles["product-desc"]}>Intensiv qulluq</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Age correction -</h5>
              <p className={styles["product-desc"]}>Gözəl yaş alma</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Esthe-white -</h5>
              <p className={styles["product-desc"]}>
                Ləkə və pigmentasiya əleyhinə qulluq
              </p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Body care -</h5>
              <p className={styles["product-desc"]}>Bədən qulluğu</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Sun care -</h5>
              <p className={styles["product-desc"]}>Günəşdən qorunma*</p>
            </li>
          </ul>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.etatpur}>
          <div className={styles["etatpur-logo"]}>
            <img src={Etatpur} alt="" />
          </div>
          <ul className={styles["etatpur-product-list"]}>
            <li>
              <h5 className={styles["product-title"]}>Cleansers -</h5>
              <p className={styles["product-desc"]}>Saf Təmizləyi vasitələr</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Pure Actives -</h5>
              <p className={styles["product-desc"]}>Saf Molekullar</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Moisturizers -</h5>
              <p className={styles["product-desc"]}>Saf Nəmləndiricilər</p>
            </li>
            <li>
              <h5 className={styles["product-title"]}>Sunscreens -</h5>
              <p className={styles["product-desc"]}>SAF Günəş qoruyucuları</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OpenProductCategories