	import styles from "./GearLoader.module.scss";

	const GearLoader = ({ text = "Оновлення..." }) => {
	return (
		<div className={styles.gearLoader}>
			<span className={styles.gearIcon}>⚙️</span>
			<span>{text}</span>
		</div>
	);
	};

	export default GearLoader;
