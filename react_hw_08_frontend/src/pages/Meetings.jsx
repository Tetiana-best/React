import { useLocation, useNavigate } from "react-router";
import TeacherCard from "./teachers/components/TeacherCard";
import frontRoutes from "../routes/frontRoutes";

function Meetings() {
	const navigate = useNavigate()
	function goToTeachersList() {
		navigate(frontRoutes.navigate.teachers.index)
	}
	const {state} = useLocation()
	const teachers = state?.teachers

	let content
	if(teachers) content = <div> 
		{state.teachers.map((teacher) =>
			<TeacherCard key={teacher.id} teacher={teacher} showActions={false}/>
		)}
	</div>
	else content=<h4>Вчителів для зборів поки що не обрано</h4>
	return ( 
		<>
		<h2>Учасники зборів</h2>
		{teachers?.length > 0 &&
		<h3>Список вчителів ({teachers.length}) для виклику на збори:</h3>
		}
		{content}
		<button onClick={goToTeachersList}>Повернутися до списку вчителів</button>
		</>
	 );
}

export default Meetings;