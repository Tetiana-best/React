import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import PostsPage from "@/pages/PostsPage";
import ProductsPage from "@/pages/ProductsPage";
import frontRoutes from "./frontRoutes";

import Page404 from "@/pages/Page404";
import { createBrowserRouter } from "react-router-dom";

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
				path: frontRoutes.pages.products,
				Component: ProductsPage,
				handler: {
					title: 'Products',
				},
			},
			{
				path: frontRoutes.pages.posts,
				Component: PostsPage,
				handler: {
					title: 'Posts',
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