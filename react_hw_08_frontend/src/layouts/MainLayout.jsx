import { Outlet } from "react-router";
import Header from "../layouts/components/Header";
import Footer from "../layouts/components/Footer";

function MainLayout() {
	return ( 
		<>
			<Header />
			<main>
				<Outlet/>
			</main>
			<Footer />
		</>
	 );
}

export default MainLayout;