import styles from "./Input.module.scss";

	export const Input = ({ type = "text", value, onChange, placeholder, disabled, className,
		name, id, ...props}) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			disabled={disabled}
			name={name}
			id={id}
			{...props}
			className={`${styles.input} ${className || ""}`}
		/>
	);
	};
