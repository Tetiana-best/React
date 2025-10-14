import { frontRoutes } from "@/app/router/frontRoutes";
import buttonStyles from "@/shared/ui/button/Button.module.scss";
import { Link } from "react-router";
import styles from "./EditDreamButton.module.scss";

export const EditDreamButton = ({dreamId, className}) => (
	<Link to={frontRoutes.navigate.dreams.edit(dreamId)}
	className={`${buttonStyles.button} ${styles.editDreamButton} ${className || ""}`}>
		Змінити</Link>
)