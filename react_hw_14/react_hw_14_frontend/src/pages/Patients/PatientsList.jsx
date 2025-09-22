import { useGetPatientsQuery } from "@/api";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import PatientItem from "./PatientItem";
import styles from "./PatientsList.module.scss";

function PatientsList() {
const [searchName, setSearchName] = useState('')
const [debouncedSearch, setDebouncedSearch] = useState(searchName)

const { data: patientsList = [], isLoading, isError } = useGetPatientsQuery()
if (isError) return <ErrorMessage> Помилка завантаження пацієнтів</ErrorMessage>;

const handleInputSearch = (e) =>{
	setSearchName(e.target.value)
}

	useEffect(() => {
		const handler = setTimeout(() => setDebouncedSearch(searchName), 300)
		return () => clearTimeout(handler)
	}, [searchName])

const filteredPatients = patientsList?.filter((patientData)=>
	patientData.fullName.toLowerCase().includes(debouncedSearch.toLowerCase() || ''))

return (
	<div className={styles.patientsList}>
		<h1>Лист пацієнтів</h1>

		{isLoading && <Spinner />}
		
		<div className={styles.flexBox}>
			<div className={styles.searchBox}>
				<label>Пошук за прізвищем пацієнта</label>
				<input type="text" value={searchName} onChange={handleInputSearch}
				placeholder="Введіть прізвище пацієнта..."></input>
			</div>
			<Link to={frontRoutes.navigate.patients.create} className={styles.addPatientBtn}
	> ➕ Новий пацієнт</Link>
		</div>
		<div className={styles.patientsTable}>
		<div className={styles.tableHeader}>
			<div>Ім'я</div>
			<div>Телефон</div>
			<div>E-mail</div>
			<div>Діагноз</div>
			<div></div>
		</div>
		{filteredPatients?.map((patientData) => (
			<PatientItem key={patientData.id} patientData={patientData} />
		))}
		</div>
	</div>
	);
}

export default PatientsList;
