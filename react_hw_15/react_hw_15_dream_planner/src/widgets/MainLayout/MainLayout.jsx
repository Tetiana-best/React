import { Outlet } from "react-router";
import MainMenu from "./ui/MainMenu";

export default function MainLayout() {
	return (
		<div>
			<MainMenu />
			<main>
				<Outlet />
			</main>
		</div>
	)
}