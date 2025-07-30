import { NavLink } from "react-router-dom";
import './Navbar.css'
import frontRoutes from "../routes/frontRoutes";

function Navbar() {
	return ( 
		<nav>
			<NavLink to = {frontRoutes.pages.home} end className={({ isActive }) => (isActive ? 'active' : '')}>
				Головна </NavLink>
			<NavLink to = {frontRoutes.pages.shop.index} className={({ isActive }) => (isActive ? 'active' : '')}>
				Магазин </NavLink>
			<NavLink to = {frontRoutes.pages.payment} className={({ isActive }) => (isActive ? 'active' : '')}>
				Правила оплати </NavLink>
			<NavLink to = {frontRoutes.pages.contacts} className={({ isActive }) => (isActive ? 'active' : '')}>
				Контакти </NavLink>
			</nav>
	 );
}

export default Navbar;