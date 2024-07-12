import React from 'react';
import styles from './Stats.module.css'



function Stats({number, text}) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.number}>{number}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </>
  );
};

export default Stats;