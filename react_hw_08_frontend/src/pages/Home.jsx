import { useNavigate } from "react-router";
import frontRoutes from "../routes/frontRoutes";
// import styles from "./Home.scss";

function Home() {
	const navigate = useNavigate()
		function goToTeachersListPage() {
		navigate(frontRoutes.navigate.teachers.index)
	}
	function goToMeetingPage() {
		navigate(frontRoutes.navigate.meeting)
	}
	return ( 
		<div >
			<div>
				<h2> Ласкаво просимо до Додатку "Вчителі"!</h2>
				<p> Цей додаток допоможе Вам керувати інформацією про вчителів , викликати їх на збори та дізнаватися про розробника.</p>
			</div>
			<div>
				<button onClick={goToTeachersListPage}>Переглянути вчителів</button>
				<button onClick={goToMeetingPage}>Переглянути список для зборів</button>
			</div>
		</div>

	 );
}

export default Home;