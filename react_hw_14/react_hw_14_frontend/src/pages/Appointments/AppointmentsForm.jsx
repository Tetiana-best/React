import {
	useCreateAppointmentsMutation,
	useGetAppointmentByIdQuery,
	useGetDoctorsQuery,
	useGetPatientsQuery,
	useUpdateAppointmentsMutation
} from "@/api";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./AppointmentsForm.module.scss";
import { emptyAppointmentData } from "./settings";

function AppointmentsForm() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: appointmentData, isLoading: loadingAppointment, isError: appointmentError } = useGetAppointmentByIdQuery(id, { skip: !id });
	const [updateAppointments, { isLoading: saving }] = useUpdateAppointmentsMutation();
	const [createAppointments, { isLoading: creating }] = useCreateAppointmentsMutation();

	const { data: patientsList, isLoading: loadingPatients, isError: patientError } = useGetPatientsQuery();
	const { data: doctorsList, isLoading: loadingDoctors, isError: doctorError } = useGetDoctorsQuery();

	const [formData, setFormData] = useState(() => emptyAppointmentData)

	useEffect(() => {
		if (appointmentData) setFormData(appointmentData);
	}, [appointmentData]);

	const handleInput = (e) => {
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (id) await updateAppointments(formData)
		else await createAppointments(formData)
		navigate(frontRoutes.navigate.appointments.base);
	};

	const saveButtonTitle = id ? "Зберегти" : "Створити"
	const isLoading = loadingAppointment || loadingPatients || 
	loadingDoctors || !patientsList || !doctorsList

	const isError = appointmentError || patientError || doctorError

	return (
		<div className={styles.formWrapper}>
			<h2>{id ? "Редагування запису на прийом" : "Додавання нового запису на прийом"}</h2>
			{isError ? (
				<h2>Помилка завантаження</h2>
				) : isLoading ? <Spinner />: (
				<form className={styles.form} onSubmit={handleSubmit}>
					<div>
						<label htmlFor="patientId">Пацієнт</label>
						<select id="patientId" name="patientId" value={formData.patientId} onChange={handleInput}>
							<option value="">---Оберіть пацієнта---</option>
							{patientsList?.length > 0 ? patientsList.map(patient => (
								<option key={patient.id} value={patient.id}>{patient.fullName}</option>
							))
							: <option disabled>Немає пацієнтів</option>
							}
						</select>
					</div>

					<div>
						<label htmlFor="doctorId">Лікар</label>
						<select id="doctorId" name="doctorId" value={formData.doctorId} onChange={handleInput}>
							<option value="">---Оберіть лікаря---</option>
							{doctorsList?.length > 0 ?doctorsList.map(doctor => (
								<option key={doctor.id} value={doctor.id}>{doctor.fullName}</option>
							))
						: <option disabled>Немає лікаря</option>
						}
						</select>
					</div>

					<div>
						<label htmlFor="date">Дата та час</label>
						<input type="datetime-local" id="date" name="date" value={formData.date} onChange={handleInput} />
					</div>

					<div>
						<label htmlFor="reason">Причина</label>
						<textarea type="text" id="reason" name="reason" value={formData.reason} onChange={handleInput} />
					</div>

					<div>
						<label htmlFor="status">Статус</label>
						<select id="status" name="status" value={formData.status} onChange={handleInput}>
							<option value="">---Оберіть статус---</option>
							<option value="active">Активний</option>
							<option value="scheduled">Запланований</option>
							<option value="completed">Завершений</option>
							<option value="cancelled">Скасований</option>
						</select>
					</div>

					<div className={styles.buttons}>
						<button type="submit" className={`${styles.save} ${styles.edit}`} disabled={saving || creating}>
							{saving || creating ? "Зберігається..." : saveButtonTitle}
						</button>
						<button type="button" className={styles.cancel} onClick={() => navigate(frontRoutes.navigate.appointments.base)}>
							Скасувати
						</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default AppointmentsForm;
