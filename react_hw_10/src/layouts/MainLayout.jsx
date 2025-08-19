import { Outlet } from "react-router";
import Header from './Header'
import DataProvider from "@/providers/DataProvider";
import ResultsProvider from "@/providers/ResultsProvider";
import ThemeProvider from "@/providers/ThemeProvider";

function MainLayout() {

	return ( 
		<div>
			<ThemeProvider>
				<DataProvider>
					<ResultsProvider>
						<Header />
						<Outlet />
					</ResultsProvider>
				</DataProvider>
			</ThemeProvider>
		</div>
	 );
}

export default MainLayout;