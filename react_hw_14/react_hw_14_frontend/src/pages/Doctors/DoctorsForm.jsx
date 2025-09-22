import { useCreateDoctorsMutation, useGetDoctorByIdQuery, useUpdateDoctorsMutation } from "@/api";
import ErrorMessage from "@/components/Error/ErrorMessage";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./DoctorsForm.module.scss";
import { doctorInputFields, emptyDoctorData } from "./settings";

function DoctorsForm() {
const { id } = useParams()
const navigate = useNavigate()

const [formData, setFormData] = useState(() => emptyDoctorData)

const { data: doctorData, isLoading, isError: loadingError } = useGetDoctorByIdQuery(id, { skip: !id })
const [updateDoctors, { isLoading: saving, isError: updateError }] = useUpdateDoctorsMutation()
const [createDoctors, { isLoading: creating, isError: createError }] = useCreateDoctorsMutation()

useEffect(() => {
	if (doctorData) setFormData(doctorData)
}, [doctorData]);

const handleInput = (e) => {
	setFormData((prevData) => ({
		...prevData, [e.target.name]: e.target.value,
	}))
}

const onSave = async (e) => {
	e.preventDefault()
	if (id) await updateDoctors(formData)
	else await createDoctors(formData)

	navigate(frontRoutes.navigate.doctors.base)
}

const saveButtonTitle = id ? "Зберегти" : "Створити"

return (
	<div className={styles.formWrapper}>
		<h2>{id ? "Редагування лікаря" : "Створення лікаря"}</h2>

			{loadingError && <div>Помилка завантаження лікаря</div>}

			{isLoading && <Spinner />}

			{!isLoading && !loadingError && (
			<form className={styles.form} onSubmit={onSave}>
				{doctorInputFields.map((field, index) => (
					<div key={index}>
						<label htmlFor={field.name}>{field.placeholder}</label>
						<input {...field} id={field.name}
							value = {formData[field.name] || ""} onChange={handleInput}/>
					</div>
				))}

			{(updateError || createError) && (
					<ErrorMessage>Помилка при збереженні даних</ErrorMessage>
				)}

				<div className={styles.buttons}>
					<button type="submit" className={`${styles.save} ${styles.edit}`}
						disabled={saving || creating}>
						{saving || creating ? "Зберігається..." : saveButtonTitle}
					</button>
					<button type="button" className={styles.cancel}
					onClick={() => navigate(frontRoutes.navigate.doctors.base)}>
					Скасувати </button>
				</div>
			</form>
			)}
		</div>
	);
	}

	export default DoctorsForm;
