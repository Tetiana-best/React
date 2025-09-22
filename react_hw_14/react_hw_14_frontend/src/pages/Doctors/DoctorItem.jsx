import { useDeleteDoctorsMutation } from '@/api';
import ErrorMessage from '@/components/Error/ErrorMessage';
import { frontRoutes } from '@/router/frontRoutes';
import { Link } from 'react-router';
import styles from './DoctorItem.module.scss';

function DoctorItem({doctorData}) {
	const[deleteDoctors, {isLoading:deleting, isError: deleteError}] = useDeleteDoctorsMutation()
	// const navigate = useNavigate()

	const onDelete = () => {
		deleteDoctors(doctorData.id)
	}
	
	return ( 
		<div className={styles.doctorRow}>
			<div className={styles.name}>{doctorData.fullName}</div>
			<div>{doctorData.specialty}</div>
			<div>{doctorData.email}</div>
			<div>{doctorData.phone}</div>
			<div>{doctorData.room}</div>
			<div>{doctorData.notes}</div>
			<div className={styles.actions}>
				<Link to={frontRoutes.navigate.doctors.edit(doctorData.id)} className={`${styles.btn} ${styles.edit}`}>Редагувати</Link>
				<button onClick={onDelete} disabled={deleting} className={`${styles.btn} ${styles.delete}`}>{deleting?'Видаляється':'Видалити'}</button>
			</div>

		{deleteError && (
			<ErrorMessage>❌ Помилка при видаленні лікаря</ErrorMessage>
			)}

		</div>
	 );
}

export default DoctorItem;