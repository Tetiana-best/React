import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.loadingText}>LOADING</div>
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}

export default Spinner;
