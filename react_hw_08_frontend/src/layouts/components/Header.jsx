import { NavLink } from "react-router";
import styles from './Header.module.scss'
import frontRoutes from "../../routes/frontRoutes";

function Header() {
	return ( 
		<header>
			<div className={styles.header__container}>
				<NavLink to={frontRoutes.navigate.home} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Головна</NavLink>

				<NavLink to={frontRoutes.navigate.teachers.index} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Вчителі</NavLink>

				<NavLink to={frontRoutes.navigate.meeting} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Збори</NavLink>

				<NavLink to={frontRoutes.navigate.aboutApp} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Про додаток</NavLink>

				<NavLink to={frontRoutes.navigate.aboutDev} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>Про розробника</NavLink>
			</div>
		</header>
	 );
}

export default Header;