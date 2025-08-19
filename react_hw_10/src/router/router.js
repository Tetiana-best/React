import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import BusesPage from "@/pages/BusesPage";
import HotelsPage from "@/pages/HotelsPage";
import ResultPage from "@/pages/ResultPage";
import frontRoutes from "./frontRoutes";
import ErrorPage from "@/pages/ErrorPage";
import Page404 from "@/pages/Page404";

import { createBrowserRouter } from "react-router";

export const routes = [
	{
		path: '/',
		Component: MainLayout,
		errorElement: ErrorPage,
		children: [
			{
				index: true,
				Component: HomePage,
				handler: {
					title: 'Home',
				},
			},
			{
				path: frontRoutes.pages.buses,
				Component: BusesPage,
				handler: {
					title: 'Buses',
				},
			},
			{
				path: frontRoutes.pages.hotels,
				Component: HotelsPage,
				handler: {
					title: 'Hotels'
				},
			},
			{
			path: frontRoutes.pages.result,
			Component: ResultPage,
			handler: {
				title: 'Results'
				},
			},
			{
			path: "*",
			Component: Page404
			},
		]
	}
]

const router = createBrowserRouter(routes)
export default router