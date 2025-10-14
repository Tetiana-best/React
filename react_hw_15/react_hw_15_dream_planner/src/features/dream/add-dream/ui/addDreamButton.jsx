import { frontRoutes } from "@/app/router/frontRoutes";
import buttonStyles from "@/shared/ui/button/Button.module.scss";
import { Link } from "react-router";
import styles from "./AddDreamButton.module.scss";

export default function AddDreamButton({className}) {
	return ( 
			<Link to={frontRoutes.pages.dreams.add}
			className={`${buttonStyles.button} ${styles.addDreamButton} ${className || ""}`}>
			Додати нову мрію
		</Link>
	 );
}