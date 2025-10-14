import DreamDetail from "@/pages/DreamDetail/DreamDetail";
import DreamEditPage from "@/pages/DreamEditPage/DreamEditPage";
import DreamsPage from "@/pages/DreamsPage/DreamsPage";
import HomePage from "@/pages/HomePage/HomePage";
import Page404 from "@/pages/Page404";
import MainLayout from "@/widgets/MainLayout/MainLayout";
import { frontRoutes } from "./frontRoutes";

export const  routes = [
	{
		path:frontRoutes.pages.home,
		Component:MainLayout,
		children:[
			{
				index:true,
				Component:HomePage,
				meta: {
					labelForMainMenu: '🏠 Головна',
				}
			},
			{
				path:frontRoutes.pages.dreams.base,
				children:[
					{
						index:true,
						Component: DreamsPage,
						meta: {
							labelForMainMenu: '🕊️ Мрії'
						}
					},
					{
						path:frontRoutes.pages.dreams.detail,
						Component: DreamDetail,
					},
					{
						path:frontRoutes.pages.dreams.add,
						Component: DreamEditPage,
					},
					{
						path:frontRoutes.pages.dreams.edit,
						Component: DreamEditPage,
					}
				]
			}
		]
	},
			{
				path:'*',
				Component: Page404,
			}
]
