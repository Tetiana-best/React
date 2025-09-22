	import { routes } from '@/router/routes';
import { NavLink } from 'react-router';
import './MainMenu.scss';

	function getItemsForMainMenu(routesList, basePath) {
	const resList = []

	routesList.forEach((route) => {
		if (route?.meta?.labelForMainMenu)
			resList.push({
			path: route.index ? basePath : basePath + route.path,
			label: route.meta.labelForMainMenu,
			})
		if (route.children)
			resList.push(
			...getItemsForMainMenu(
				route.children,
				basePath ? basePath + route.path + '/' : route.path
			)
			)
	})
	return resList
	}

	function MainMenu() {
	const itemsForMainMenu = getItemsForMainMenu(routes, '')

	return (
		<nav>
			<ul>
			{itemsForMainMenu.map((item, index) => (
				<li key={index}>
					<NavLink to={item.path} end
					className={({ isActive }) => (isActive ? 'active' : '')}>
					{item.label}
					</NavLink>
				</li>
			))}
			</ul>
		</nav>
	)
	}

	export default MainMenu
