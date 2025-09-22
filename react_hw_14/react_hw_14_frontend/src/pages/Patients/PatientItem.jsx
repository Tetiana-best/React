import { useDeletePatientsMutation } from "@/api";
import ErrorMessage from "@/components/Error/ErrorMessage";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";
import styles from "./PatientItem.module.scss";

function PatientItem({ patientData }) {
	const [deletePatients, {isLoading:deleting, isError: deleteError }] = useDeletePatientsMutation()

	const onDelete = () => {
		deletePatients(patientData.id)
	}
	
return (
	<div className={styles.patientRow}>
		<div className={styles.name}>{patientData.fullName}</div>
		<div>{patientData.phone}</div>
		<div>{patientData.email}</div>
		<div>{patientData.notes}</div>
		<div className={styles.actions}>
			<Link to={frontRoutes.navigate.patients.getById(patientData.id)} className={`${styles.btn} ${styles.details}`}>🔍 Деталі</Link>
			<Link to={frontRoutes.navigate.patients.edit(patientData.id)} className={`${styles.btn} ${styles.edit}`}>✏️ Редагувати</Link>
			<button onClick={onDelete} disabled={deleting} className={`${styles.btn} ${styles.delete}`}>{deleting? 'Видаляється...' : '🗑️ Видалити'}</button>
		</div>

		{deleteError && (
		<ErrorMessage>
			❌ Помилка при видаленні пацієнта
		</ErrorMessage>
		)}

	</div>
	);
}

export default PatientItem;
