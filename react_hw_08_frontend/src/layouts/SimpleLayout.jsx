import { Outlet } from "react-router";
import GoHomeButton from "../components/GoHomeButton";

function SimpleLayout() {
	return ( 
		<main>
			<Outlet />
			<hr />
			<GoHomeButton />
		</main>
	 );
}

export default SimpleLayout;