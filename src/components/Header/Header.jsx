import React from 'react';
import styles from './Header.module.css'
import Stats from '../Stats/Stats'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.stats}>
        <Stats number={24} text={"level"}/>
        <Stats number={1425} text={"coins awarded"}/>
      </div>
      <div className={styles.timeStats}>
        
      </div>
    </div>
  );
};

export default Header;