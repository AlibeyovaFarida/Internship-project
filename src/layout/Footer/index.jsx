import React from "react";
import styles from "./style.module.scss";
import LogoImage from "../../assets/Logo/logo-image.svg";
import NAOS from "../../assets/Logo/NAOS.svg";
import BidermaLogo from "../../assets/Brends/Bioderma.svg";
import EsthedermLogo from "../../assets/Brends/Esthederm.svg";
import EtatpurLogo from "../../assets/Brends/etat-pur.svg";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Instagram from "../../assets/icons/instagram-icon.svg";
import Whatsapp from "../../assets/icons/whatsapp-icon.svg";
import Youtube from "../../assets/icons/youtube-icon.svg";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["footer-top"]}>
          <div className={styles["NAOS"]}>
            <div className={styles["NAOS-logo"]}>
              <img src={LogoImage} alt="" />
              <img src={NAOS} alt="" />
            </div>
            <p className={styles["NAOS-desc"]}>
              NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir.
              NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles["footer-main"]}>
            <div className={styles.brends}>
              <div className={styles.bioderma}>
                <div className={styles["bioderma-logo"]}>
                  <img src={BidermaLogo} alt="" />
                </div>
                <div className={styles["social-media-accounts"]}>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
              </div>
              <div className={styles.esthederm}>
                <div className={styles["esthederm-logo"]}>
                  <img src={EsthedermLogo} alt="" />
                </div>
                <div className={styles["social-media-accounts"]}>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
              </div>
              <div className={styles.etatpur}>
                <div className={styles["esthederm-logo"]}>
                  <img src={EtatpurLogo} alt="" />
                </div>
                <div className={styles["social-media-accounts"]}>
                  <a href="#">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles["footer-list"]}>
              <div className={styles.categories}>
                <h4 className={styles.title}>Kateqoriyalar</h4>
                <ul className={styles.list}>
                  <li>
                    <a href="#">Brendlər və Məhsullar</a>
                  </li>
                  <li>
                    <a href="#">Qulluq setləri</a>
                  </li>
                  <li>
                    <a href="#">Günəş qoruyucuları</a>
                  </li>
                  <li>
                    <a href="#">Göz yaş alma</a>
                  </li>
                  <li>
                    <a href="#">Üz qulluğu</a>
                  </li>
                  <li>
                    <a href="#">Bədən qulluğu</a>
                  </li>
                </ul>
              </div>
              <div className={styles.company}>
                <h4 className={styles.title}>Şirkət</h4>
                <ul className={styles.list}>
                  <li>
                    <a href="#">Haqqımızda</a>
                  </li>
                  <li>
                    <a href="#">Faydalı</a>
                  </li>
                  <li>
                    <a href="#">Aksiyalar və Kompaniyalar</a>
                  </li>
                </ul>
              </div>
              <div className={styles.help}>
                <h4 className={styles.title}>Kömək</h4>
                <ul className={styles.list}>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Ödəniş və çatdırılma</a>
                  </li>
                  <li>
                    <a href="#">Zəmanət şərtləri</a>
                  </li>
                  <li>
                    <a href="#">Mağaza ünvanları</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <div className={styles["social-media-accounts"]}>
            <a href="#">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="#">
              <img src={Youtube} alt="" />
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Bütün hüquqlar qorunur. © 2022 BIODERMA</p>
          </div>
          <div className={styles.paragraph}>
            <p>
              Bu bir <a href="#">Marcom</a> məhsuludur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
