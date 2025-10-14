import styles from "./Button.module.scss";

	export const Button = ({ children, onClick, disabled, className }) => {
	return (
		<button
			className={`${styles.button} ${className || ""}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
	};
