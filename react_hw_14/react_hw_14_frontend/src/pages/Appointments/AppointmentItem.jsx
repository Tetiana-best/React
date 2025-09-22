import { useDeleteAppointmentsMutation, useGetDoctorByIdQuery, useGetPatientByIdQuery } from "@/api";
import ErrorMessage from "@/components/Error/ErrorMessage";
import GearLoader from "@/components/GearLoader/GearLoader";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";
import styles from "./AppointmentItem.module.scss";

function AppointmentItem({ appointmentData }) {
const { data: patientData, isLoading: loadingPatient, isError: patientError } = useGetPatientByIdQuery(appointmentData.patientId);
const { data: doctorData, isLoading: loadingDoctor, isError: doctorError } = useGetDoctorByIdQuery(appointmentData.doctorId);
const [deleteAppointments, { isLoading: deleting, isError: deleteError }] = useDeleteAppointmentsMutation();

const onDelete = () => {
	deleteAppointments(appointmentData.id)
}

return (
	<div className={styles.appointmentRow}>
		<div className={styles.name}>
			{loadingPatient ? "…" : patientError ? "⚠️ Помилка пацієнта" : 
				patientData?.fullName || ""}
		</div>
		<div className={styles.name}>
			{loadingDoctor ? "…" : doctorError ? "⚠️ Помилка лікаря" : 
				doctorData?.fullName || ""}
		</div>
		<div>{appointmentData.date}</div>
		<div>{appointmentData.reason}</div>
		<div>{appointmentData.status}</div>

		<div className={styles.actions}>
		<Link to={frontRoutes.navigate.appointments.edit(appointmentData.id)} className={`${styles.btn} ${styles.edit}`}>
			✏️ Редагувати
		</Link>
		<button onClick={onDelete} disabled={deleting} className={`${styles.btn} ${styles.delete}`}>
			{deleting ? <GearLoader text="Видаляється..." /> : "🗑️ Видалити"}
		</button>
		</div>

		{deleteError && (
				<ErrorMessage>❌ Помилка при видаленні прийому</ErrorMessage>
				)}
	</div>
	);
}

export default AppointmentItem;
