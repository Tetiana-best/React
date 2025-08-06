import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
import apiRoutes from "../../api/apiRoutes";
import useTeachersApi from "../../hooks/useTeachersApi";
import Spinner from "../../components/Spinner";

function TeachersForm() {
	const [showSpinner, setShowSpinner] = useState(false);
	const[teacher, setTeacher] = useState(
		{
			name:'',
			subject: '',
			photo:''
		}
	)
		const {
		loading, error,
		addNewTeacher,
		getTeacherDetail,
		editTeacher} = useTeachersApi()
		const navigate = useNavigate()
	const{id}=useParams()
	const isEditing= !!id

		useEffect(() => {
		if (id) {
			async function teacherData() {
			const data = await getTeacherDetail(id)
			if (data) setTeacher(data)
			else navigate(frontRoutes.navigate.teachers.index)
			}
			teacherData()
		}
	}, [id, getTeacherDetail, navigate])

	const handleChange =(e) =>{
		setTeacher((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	function handleCancel(){
		navigate(frontRoutes.navigate.teachers.index)
	}
	const handleSubmit = async(e) => {
		e.preventDefault()
		isEditing ? await editTeacher(id, teacher) : await addNewTeacher(teacher)
		navigate(frontRoutes.navigate.teachers.index)
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
	return (
		<div>
			{error && <div>Помилка завантаження даних!</div>}
			{showSpinner ? (
					<Spinner />
				) : (
			<form onSubmit={handleSubmit}>
				<h2>{isEditing? 'Редагувати вчителя':'Додати нового вчителя'}</h2>
				<label>Імя
					<input name="name" value={teacher.name} onChange={handleChange}/>
				</label>
				<label>Предмет
					<input name="subject" value={teacher.subject} onChange={handleChange}/>
				</label>
				<label>Фото URL(не обовязково)
					<input name="photo" value={teacher.photo} onChange={handleChange}/>
				</label>
				<button type="submit">{isEditing? 'Оновити вчителя':'Додати нового вчителя'}</button>
				<button type="button" onClick={handleCancel}>Скасувати</button>
			</form>
		)}
	</div>
);
}
export default TeachersForm;