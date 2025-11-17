import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { Link } from "react-router";

export default function AddUserButton() {
	return ( 
			<Link to={frontRoutes.pages.CreateUserPage.navigationPath}
					className="btn-adduser">
				Додати нового користувача
			</Link>
	 );
}