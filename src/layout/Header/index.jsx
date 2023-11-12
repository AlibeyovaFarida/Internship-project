import React from 'react'
import styles from './style.module.scss'
import LogoImage from '../../assets/Logo/logo-image.svg'
import NAOS from '../../assets/Logo/NAOS.svg'
import Bioderma from '../../assets/Brends/Bioderma.svg'
import Esthederm from '../../assets/Brends/Esthederm.svg'
import Etatpur from '../../assets/Brends/etat-pur.svg'
import SearchIcon from '../../assets/icons/search-icon.svg'
import HeartIcon from '../../assets/icons/heart-icon.svg'
import CartIcon from '../../assets/icons/cart-icon.svg'
import BurgerIcon from '../../assets/icons/burger-icon.svg'
import OpenBar from '../../components/OpenBar'
const Header = ({isOpenBar, setIsOpenBar}) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles["NAOS-logo"]}>
            <img src={LogoImage} alt="" />
            <img src={NAOS} alt="" />
          </div>
          <div className={styles.brends}>
            <div className={styles.bioderma}>
              <img src={Bioderma} alt="" />
            </div>
            <div className={styles.esthederm}>
              <img src={Esthederm} alt="" />
            </div>
            <div className={styles.etatpur}>
              <img src={Etatpur} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <form action="" className={styles["desktop-search"]}>
              <input type="text" placeholder="Search" />
              <button type="submit">
                <img src={SearchIcon} alt="" />
              </button>
            </form>
            <button className={styles["open-search-modal-btn"]}>
              <img src={SearchIcon} alt="" />
            </button>
          </div>
          <a href="#" className={styles.wishlist}>
            <img src={HeartIcon} alt="" />
          </a>
          <a href="#" className={styles.cart}>
            <img src={CartIcon} alt="" />
            <span className={styles["basket-amount"]}>2</span>
          </a>
          <div className={styles["burger-btn"]}>
            <button
              className={styles["open-menu"]}
              onClick={() => {
                setIsOpenBar(true);
              }}
            >
              <img src={BurgerIcon} alt="" />
            </button>
          </div>
          <div className={styles.lang}>
            <a href="#" className={styles.active}>
              AZ
            </a>
            <div className={styles.line}></div>
            <a href="#">EN</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header