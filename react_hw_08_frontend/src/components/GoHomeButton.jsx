import { useNavigate } from "react-router";
import frontRoutes from "../routes/frontRoutes";
import styles from "./GoHomeButton.module.scss";

function GoHomeButton() {
	const navigate = useNavigate()

	function goHome() {
		navigate(frontRoutes.navigate.home)
	}

	return ( 
		<button onClick={goHome} className={styles.home__button}>На головну</button>
	 );
}

export default GoHomeButton;