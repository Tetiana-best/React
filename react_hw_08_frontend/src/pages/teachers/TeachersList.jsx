import { useNavigate } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import useTeachersApi from "../../hooks/useTeachersApi";
import { useEffect, useState } from "react";
import TeacherCard from "./components/TeacherCard";
import apiRoutes from "../../api/apiRoutes.js";
import Spinner from "../../components/Spinner";

function TeachersList() {
	const [showSpinner, setShowSpinner] = useState(false);
	const navigate = useNavigate()
	const {data: teachersList, 
		loading, 
		error, 
		fetchTeachers, 
		deleteTeacher} = useTeachersApi()
	const [selectedTeachersId, setSelectedTeachersId] = useState([])

	useEffect(()=>{
		fetchTeachers()
	},[fetchTeachers])

	function goToNewTeacher() {
		navigate(frontRoutes.navigate.teachers.add)
	}
	function goToMeeting() {
		navigate(frontRoutes.navigate.meeting, {
			state: {
				teachers: teachersList.filter((teacher) => selectedTeachersId.includes(teacher.id))
			}
		})
	}
	const onSelect = (id) => {
		if(selectedTeachersId.includes(id))
			setSelectedTeachersId((prev) => prev.filter((tId) => tId !== id))
		else setSelectedTeachersId((prev) => [...prev, id])
	}
		useEffect(() => {
		let timer;
		if (loading) {
			setShowSpinner(true);
		} else {
			timer = setTimeout(() => setShowSpinner(false), 1500);
		}
		return () => clearTimeout(timer);
	}, [loading]);

	let content
	if(showSpinner) content = <Spinner />
	else if (error) content = <h2>Помилка завантаження даних!</h2>
	else content = <div>
		<div>
			<button onClick={goToNewTeacher}>Додати нового вчителя</button>
			<button onClick={goToMeeting}>Викликати {selectedTeachersId.length} вчителів на збори</button>
		</div>
		{teachersList.map((teacher) => 
		<TeacherCard key={teacher.id} 
		teacher={teacher} 
		onSelect={onSelect}
		isSelected={selectedTeachersId.includes(teacher.id)}
		fetchTeachers = {fetchTeachers}
		deleteTeacher={deleteTeacher}/>)}
	</div>



	return ( 
		<div>
			<h2>Список вчителів</h2>
			{content}
			
		</div>
	 );
}

export default TeachersList;