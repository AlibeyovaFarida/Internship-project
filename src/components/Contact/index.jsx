import React from 'react'
import styles from './style.module.scss'
import Facebook from '../../assets/Contact/facebook.svg'
import Instagram from '../../assets/Contact/instagram.svg'
import Whatsapp from '../../assets/Contact/whatsapp.svg'
import Message from '../../assets/Contact/message.svg'
import Scroll from '../../assets/Contact/scroolup.svg'
const Contact = () => {
  return (
    <div className={styles["social-media"]}>
      <a href="#" className={styles.facebook}>
        <img src={Facebook} alt="" />
      </a>
      <div className={styles.line}></div>
      <a href="#" className={styles.instagram}>
        <img src={Instagram} alt="" />
      </a>
      <div className={styles.line}></div>
      <a href="#" className={styles.whatsapp}>
        <img src={Whatsapp} alt="" />
      </a>
      <a href="#" className={styles.chat}>
        <img src={Message} alt="" />
      </a>
      <button className={styles.scroll} onClick={() => window.scrollTo(0,0)}>
        <img src={Scroll} alt="" />
      </button>
    </div>
  );
}

export default Contact