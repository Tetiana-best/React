import { useGetAppointmentsQuery, useGetPatientsQuery } from "@/api";
import ErrorMessage from "@/components/Error/ErrorMessage";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import AppointmentItem from "./AppointmentItem";
import styles from "./AppointmentsList.module.scss";

function AppointmentsList() {
const [searchName, setSearchName] = useState('')
const [debouncedSearch, setDebouncedSearch] = useState(searchName)

const { data: appointmentsList = [], isLoading:loadingAppointments, isError: appointmentError } = useGetAppointmentsQuery()
// const {data:appointmentsList=[], isLoading}= // useGetAppointmentsQuery({ patientName: searchName })
const { data: patientsList = [], isLoading: loadingPatients, isError: patientError } = useGetPatientsQuery()

const isLoading = loadingAppointments || loadingPatients

const isError = appointmentError || patientError
if (isError) return <ErrorMessage>Помилка завантаження списку</ErrorMessage>


const handleInputSearch = (e) => {
	setSearchName(e.target.value)
}

	useEffect(() => {
	const handler = setTimeout(() => setDebouncedSearch(searchName), 300)
	return () => clearTimeout(handler)
	}, [searchName])

const filteredAppointments = appointmentsList.filter((appointment) => {
	const patient = patientsList.find((p) => p.id === appointment.patientId)
	return patient?.fullName?.toLowerCase().includes(debouncedSearch.toLowerCase() || '')
})

return (
	<div className={styles.appointmentsList}>
		<h1>Список записів на прийом</h1>

		{(isLoading) && <Spinner />}

		<div className={styles.flexBox}>
		<div className={styles.searchBox}>
			<label>Пошук запису за прізвищем пацієнта</label>
			<input type="text" value={searchName} onChange={handleInputSearch}
				placeholder="Введіть прізвище пацієнта..."/>
		</div>
		<Link to={frontRoutes.navigate.appointments.create}
			className={styles.addAppointmentBtn}> ➕ Новий запис
		</Link>
		</div>

		<div className={styles.appointmentsTable}>
		<div className={styles.tableHeader}>
			<div>Пацієнт</div>
			<div>Лікар</div>
			<div>Дата</div>
			<div>Причина</div>
			<div>Статус</div>
			<div></div>
		</div>

		{filteredAppointments.length > 0 ? (
			filteredAppointments.map((appointmentData) => (
			<AppointmentItem key={appointmentData.id} appointmentData={appointmentData} />)
		)):(<div>Немає записів...</div>)}
		</div>
	</div>
	);
}

export default AppointmentsList;
