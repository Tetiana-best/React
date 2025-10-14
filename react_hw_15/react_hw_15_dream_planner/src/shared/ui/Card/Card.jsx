import styles from "./Card.module.scss";

/**
 * Базова картка для контенту
 */
export const Card = ({ children, className }) => {
  return <div className={`${styles.card} ${className || ""}`}>{children}</div>;
};
