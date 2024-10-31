// components/NeverEndingBox.js

import styles from '../styles/NeverEndingBox.module.css'; // CSS Module import edildi

function NeverEndingBox() {
  return (
    <div className={styles['box-container']}>
      <div className={styles.box}>
        <div className={`${styles.side} ${styles.front}`}></div>
        <div className={`${styles.side} ${styles.back}`}></div>
        <div className={`${styles.side} ${styles.left}`}></div>
        <div className={`${styles.side} ${styles.right}`}></div>
        <div className={`${styles.side} ${styles.top}`}></div>
        <div className={`${styles.side} ${styles.bottom}`}></div>
      </div>
    </div>
  );
}

export default NeverEndingBox;
