import { useGetDoctorsQuery } from "@/api";
import ErrorMessage from "@/components/Error/ErrorMessage";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes";
import { Link } from "react-router";
import DoctorItem from "./DoctorItem";
import styles from "./DoctorsList.module.scss";

function DoctorsList() {
	const { data: doctorsList = [], isLoading, isError } = useGetDoctorsQuery();

	if (isError) return <ErrorMessage> Помилка завантаження лікарів</ErrorMessage>

	return ( 
		<div className={styles.doctorsList}>
			<h1>Список лікарів</h1>

			<Link to={frontRoutes.navigate.doctors.create} className={styles.addDoctorBtn}>Додати лікаря</Link>

		{isLoading ? (
			<Spinner />
				) : (
				<div className={styles.doctorsTable}>
					<div className={styles.tableHeader}>
						<div>Ім'я</div>
						<div>Спеціальність</div>
						<div>E-mail</div>
						<div>Телефон</div>
						<div>Кабінет</div>
						<div>Часи прийому</div>
						<div></div>
					</div>

				{doctorsList?.length > 0 ? (
					doctorsList.map((doctorData) => (
						<DoctorItem key={doctorData.id} doctorData={doctorData} />))
				) : (
					<div>Лікарів не знайдено</div>
				)}
				</div>
			)}
		</div>
	);
}

export default DoctorsList;
