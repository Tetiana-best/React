import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
return (
	<div className={styles.homePage}>
		<h1 className={styles.homeTitle}>Вітаємо у системі управління клінікою 👋</h1>
		<p className={styles.homeSubtitle}>Оберіть розділ, з яким хочете працювати</p>

		<div className={styles.cards}>
		<Link to={frontRoutes.pages.patients.base} className={styles.card}>
			<div className={styles.icon}>👤</div>
			<h2>Пацієнти</h2>
			<p>Керування пацієнтами та їхніми даними</p>
		</Link>

		<Link to={frontRoutes.pages.doctors.base} className={styles.card}>
			<div className={styles.icon}>🩺</div>
			<h2>Лікарі</h2>
			<p>Список лікарів та їхні профілі</p>
		</Link>

		<Link to={frontRoutes.pages.appointments.base} className={styles.card}>
			<div className={styles.icon}>📅</div>
			<h2>Записи</h2>
			<p>Планування та керування зустрічами</p>
		</Link>
		</div>
	</div>
);
}

export default Home;
