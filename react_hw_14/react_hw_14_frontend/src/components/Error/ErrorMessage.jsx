import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ children }) {
  return <div className={styles.error}>{children}</div>
}

export default ErrorMessage;