import { useEffect } from 'react';
import useTeachersApi from '../../../hooks/useTeachersApi';
import styles from './TeacherCard.module.scss'
import apiRoutes from '../../../api/apiRoutes';
import { useNavigate } from 'react-router';
import frontRoutes from '../../../routes/frontRoutes';


function TeacherCard({ teacher, onSelect, isSelected, showActions = true, fetchTeachers, deleteTeacher }) {
	const navigate = useNavigate()

	function goToEditTeacher(id) {
		navigate(frontRoutes.navigate.teachers.getEditLink(teacher.id))
	}
	async function handleDelete (id) {
		await  deleteTeacher(id)
		await fetchTeachers()
	}
	return (
		<div>
			<div className={`${styles.container__teachers_card} ${styles.teachers_card}`}>
				<div className={styles.teachers_card__info}>
					<img src={teacher.photo} alt="Image" />
					<div>
						<div>{teacher.name}</div>
						<div>{teacher.subject}</div>
					</div>
				</div>
				<div className={`${styles.teachers_card__button} ${styles.button}`}>
					{onSelect &&
						<button onClick={() => onSelect(teacher.id)}
						className={isSelected ? styles['button--selected'] : ''}>
							{isSelected ? 'Вибрано' : 'Вибрати на збори'}
						</button>}
				</div>
			</div>
			{showActions && 
				<div className={styles.teachCard__actions}>
					<button onClick={goToEditTeacher} className={styles.teachCard__buttonEdit}>Редагувати</button>
					<button onClick={()=> handleDelete(teacher.id)} className={styles.teachCard__buttonDelete}>Видалити</button>
				</div>
			}
		</div>
	);
}

export default TeacherCard;
