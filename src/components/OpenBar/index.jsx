import React from "react";
import Cancel from "../../assets/icons/cancel-icon.svg";
import Arrow from '../../assets/icons/arrow-bottom-icon.svg'
import styles from './style.module.scss'
const OpenBar = ({ isOpenBar, setIsOpenBar }) => {
    console.log(isOpenBar);
  return (
    <div
      className={
        isOpenBar
          ? styles["open-bar"]
          : `${styles["open-bar"]} ${styles["open-bar-hide"]}`
      }
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>Menu</h3>
          <button className={styles.cancel} onClick={() => setIsOpenBar(false)}>
            <img src={Cancel} alt="" />
          </button>
        </div>
        <ul className={styles["open-bar-list"]}>
          <li>
            <a href="#">
              <span>Brendlər və məhsullar</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Üz qulluğu</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Bədən qulluğu</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Günəş Qoruyucuları</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Gözəl yaş alma</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Qulluq setləri</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Aksiyalar və Kompaniyalar</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Haqqımızda</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>Faydalı</span>
              <img src={Arrow} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OpenBar;
