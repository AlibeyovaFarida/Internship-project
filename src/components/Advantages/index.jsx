import React from 'react'
import styles from './style.module.scss'
import Icon1 from '../../assets/Advantages/icon-1.svg'
import Icon2 from '../../assets/Advantages/icon-2.svg'
import Icon3 from '../../assets/Advantages/icon-3.svg'
import Icon4 from '../../assets/Advantages/icon-4.svg'
const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <div className={styles.advantage}>
          <img src={Icon1} alt="" />
          <p>Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi</p>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.advantage}>
          <img src={Icon2} alt="" />
          <p>Dəriyə dərin hörmət</p>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.advantage}>
          <img src={Icon3} alt="" />
          <p>
            Effektivlik və təhlükəsizlik tibbi nəzarət altında sınaqdan
            keçirilmişdir
          </p>
        </div>
        <div className={styles.seperator}></div>
        <div className={styles.advantage}>
          <img src={Icon4} alt="" />
          <p>Səhiyyə mütəxəssisləri ilə 40 illik iş təcrübəsi</p>
        </div>
      </div>
    </div>
  );
}

export default Advantages