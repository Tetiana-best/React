import { useGetPatientByIdQuery } from "@/api";
import ErrorMessage from "@/components/Error/ErrorMessage";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes";
import { Link, useNavigate, useParams } from "react-router";
import styles from "./PatientDetails.module.scss";

function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: patientData, isLoading, isError } = useGetPatientByIdQuery(id);

  if (isLoading) return <div className={styles.loading}><Spinner /></div>;
  if (isError) return <ErrorMessage>Пацієнта не знайдено</ErrorMessage>;

  return (
    <div className={styles.formWrapper}>
      <h2>Деталі пацієнта</h2>
      <p>ПІБ: {patientData.fullName}</p>
      <p>Дата народження: {patientData.birthDate}</p>
      <p>Стать: {patientData.gender}</p>
      <p>Телефон: {patientData.phone}</p>
      <p>e-mail: {patientData.email}</p>
      <p>Адреса: {patientData.address}</p>
      <p>Діагноз: {patientData.notes}</p>

<div className={styles.buttons}>
  <Link className={styles.edit} to={frontRoutes.navigate.patients.edit(patientData.id)}>✏️ Редагувати</Link>
  <button className={styles.back} onClick={() => navigate(-1)}>⬅️ Назад</button>
</div>

    </div>
  );
}

export default PatientDetails;
