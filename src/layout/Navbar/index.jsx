import React from 'react'
import {useState} from 'react'
import styles from './style.module.scss'
import OpenProductCategories from '../../components/OpenProductCategory'
const Navbar = ({ isShowMenu, setIsShowMenu }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles["navbar-list"]}>
          <li
            className={styles.products}
            onMouseOver={() => setIsShowMenu(true)}
            onMouseOut={() => setIsShowMenu(false)}
          >
            <a href="#" style={{ color: isShowMenu && "#009BC7" }}>
              Brendlər və Məhsullar
            </a>
          </li>
          <li>
            <a href="#">Üz qulluğu</a>
          </li>
          <li>
            <a href="#">Bədən qulluğu</a>
          </li>
          <li>
            <a href="#">Günəş qoruyucuları</a>
          </li>
          <li>
            <a href="#">Gözəl yaş alma</a>
          </li>
          <li>
            <a href="#">Qulluq setləri</a>
          </li>
          <li>
            <a href="#">Aksiyalar və Kompaniyalar</a>
          </li>
          <li>
            <a href="#">Haqqımızda</a>
          </li>
          <li>
            <a href="#">Faydalı</a>
          </li>
        </ul>
      </div>
      {isShowMenu && (
        <OpenProductCategories
          isShowMenu={isShowMenu}
          setIsShowMenu={setIsShowMenu}
        />
      )}
    </div>
  );
};

export default Navbar