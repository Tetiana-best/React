import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={`${styles.dot} ${styles.dot1}`}></div>
      <div className={`${styles.dot} ${styles.dot2}`}></div>
      <div className={`${styles.dot} ${styles.dot3}`}></div>
    </div>
  );
}

export default Spinner;