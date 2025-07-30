import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import frontRoutes from './frontRoutes'
import Layout from '../components/Layout'

const Home = lazy(() => import('../pages/Home'))
import CategoryList from '../pages/products/CategoryList'
import ProductsList from '../pages/products/ProductsList'
import ProductDetails from '../pages/products/ProductDetails'
import Payment from '../pages/Payment'
import Contacts from '../pages/Contacts'

import Page404 from '../pages/Page404'

function AppRoutes() {
	return ( 
		<Routes>
			{/* Головний Layout з хедером + контент */}
			<Route path={frontRoutes.pages.home} element={<Layout />}>
 			{/* Головна */}
			<Route index element = {<Suspense fallback={<div>Завантаження...</div>}><Home /></Suspense>} />
				{/* Магазин: /products + вкладені */}
				<Route path={frontRoutes.pages.shop.index}>
					<Route index element={<CategoryList />} />
					<Route path={frontRoutes.pages.shop.productsList} element={<ProductsList />} />
					<Route path={frontRoutes.pages.shop.productDetail} element={<ProductDetails />} />
				</Route>
				<Route path={frontRoutes.pages.contacts} element={<Contacts />} />
				<Route path={frontRoutes.pages.payment} element={<Payment />} />
				{/* <Route path="*" element={<Page404 />} /> */}
				<Route path={frontRoutes.pages.page404} element={<Page404 />} />
			</Route>
		</Routes>
	 );
}

export default AppRoutes;