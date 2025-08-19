import { routes } from "@/router/router";
import { NavLink } from 'react-router'
import '@/layouts/MainMenu.scss'

function MainMenu() {
	return ( 
		<nav>
			{routes[0].children.map((r, index) => (
				<li key={index}>
					<NavLink to = {r.path?? ''} className = {({ isActive }) => (isActive ? 'active' : '')}>
						{r.handler?.title}
					</NavLink>
				</li>
			))}
		</nav>
	 );
}

export default MainMenu;