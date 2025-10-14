import { routes } from "@/app/router/routes";
import '@/shared/styles/base/index.scss';
import { NavLink } from "react-router";

function getItemsForMainMenu(routesList, basePath) {
	const resList = []

	routesList.forEach((route) => {
		if(route?.meta?.labelForMainMenu)
			resList.push({
				path: route.index ? basePath : basePath + route.path,
				label: route.meta.labelForMainMenu,
		})
		if(route.children)
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
	console.log(itemsForMainMenu)
	return ( 
		<nav>
			<ul>
				{itemsForMainMenu.map((item, index) => (
					<li key={index}>
						<NavLink to={item.path} end className={({ isActive}) => (isActive ? 'active' : '')}>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	 );
}

export default MainMenu;

//const itemsForMainMenu = getItemsForMainMenu(routes, '')/ function MainMenu() {
// 	const itemsForMenu = routes[0].children.filte
// <nav>r((r) => r?.meta?.label)
// 	.map((r) => ({
// 		path: r.index ? '/' : r.path,
// 		label: r.meta.label,
// 	}))
// 	return ( 
// 		<nav>
// 			{itemsForMenu.map((r) => (
// 				<NavLink key={r.path} to={r.path} className={({ isActive }) => (isActive ? 'active' : '')}>
// 					{r.label}
// 				</NavLink>
// 			))}
// 		</nav>
// 	 );
// }

// export default MainMenu;