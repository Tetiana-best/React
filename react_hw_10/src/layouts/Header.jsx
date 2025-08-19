import { ThemeContext } from "@/context/ThemeContext";
import MainMenu from "./MainMenu";
import { useContext } from "react";

function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext)
	
	return ( 
		<div>
			<MainMenu />
			<button onClick={toggleTheme}>
				{theme === "dark" ? "🌞 Світла тема" : "🌙 Темна тема"}
			</button>
		</div>
	 );
}

export default Header;