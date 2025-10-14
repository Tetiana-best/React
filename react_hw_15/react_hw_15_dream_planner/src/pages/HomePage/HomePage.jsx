	import { frontRoutes } from "@/app/router/frontRoutes";
import homeBg from "@/shared/assets/images/home-bg.jpg"; // або заміни на "/assets/images/home-bg.jpg"
import { Button } from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router";
import styles from "./HomePage.module.scss";

	export default function HomePage() {
		const navigate = useNavigate();

	const handleGoToDreams = () => {
		navigate(frontRoutes.pages.dreams.base);
	};

	return (
		<div className={styles.home}>
			<div className={styles.content}>
			<h1 className={styles.title}>Ласкаво просимо у DreamSpace 🌙</h1>
			<p className={styles.subtitle}>Тут твої мрії стають реальністю</p>
			<img src={homeBg} alt="Dream background" className={styles.image} />
			<Button onClick={handleGoToDreams} className={styles.button}>
				Перейти до списку моїх мрій
			</Button>
			</div>
		</div>
	);
	}
