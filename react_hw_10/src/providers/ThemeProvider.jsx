import { ThemeContext } from "@/context/ThemeContext";
import { useState, useEffect  } from "react";

function ThemeProvider({children}) {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	useEffect(() => {
		document.body.classList.remove("dark", "light")
		document.body.classList.add(theme)

	}, [theme])

		return ( 
		<ThemeContext value={{theme, toggleTheme}}>
			{children}
		</ThemeContext>
	 );
}

export default ThemeProvider;