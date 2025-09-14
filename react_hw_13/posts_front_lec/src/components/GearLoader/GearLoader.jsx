import { FaCog } from "react-icons/fa";
import styles from "./GearLoader.module.scss";

const GearLoader = ({ text = "Оновлення..." }) => {
  return (
    <div className={styles.gearLoader}>
      <FaCog className={styles.gearIcon} />
      <span>{text}</span>
    </div>
  );
};

export default GearLoader;
