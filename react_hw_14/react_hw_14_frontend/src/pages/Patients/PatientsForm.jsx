import { useCreatePatientsMutation, useGetPatientByIdQuery, useUpdatePatientsMutation } from "@/api";
import Spinner from "@/components/Spinner/Spinner";
import { frontRoutes } from "@/router/frontRoutes.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./PatientsForm.module.scss";
import { emptyPatientData, patientInputFields } from "./settings.js";

function PatientsForm() {
	const {id} = useParams()
	const navigate = useNavigate()
	
	const {data:patientData, isLoading} = useGetPatientByIdQuery(id, {skip:!id})
	const[updatePatients, {isLoading:saving}] = useUpdatePatientsMutation()
	const[createPatients, {isLoading:creating}] = useCreatePatientsMutation()

	const formError = patientError || updateError || createError
	
	const[formData, setFormData] = useState(()=>emptyPatientData)

		useEffect(()=> {
			if(patientData) setFormData(patientData)
		}, [patientData])

		const handleInput = (e) => {
			setFormData((prevData)=>({
				...prevData, [e.target.name]: e.target.value,
			}))
		} 
		const onSave = async (e) =>{
			e.preventDefault()
			if(id) await updatePatients(formData)
			else await createPatients(formData)
			navigate(frontRoutes.navigate.patients.base)
		}
		const saveButtonTitle= id? 'Зберегти': 'Створити'
		const handleCancel = () => {
			navigate(frontRoutes.navigate.patients.base)
		}
	return ( 
		<div className={styles.formWrapper}>
		<h2>{id ? 'Редагування даних пацієнта' : 'Додавання нового пацієнта'}</h2>

		{formError && 
			<ErrorMessage>❌ Помилка при завантаженні або збереженні даних пацієнта</ErrorMessage>}

		{isLoading && <Spinner />}
		{!isLoading && !formError && (
		<form onSubmit={onSave} className={styles.form}>
			{patientInputFields.map((field, index) => (
				<div key={index}>
				<input 
					{...field}
					value={formData[field.name]}
					onChange={handleInput}
				/>
				</div>
			))}
				<div className={styles.buttons}>
					<button type="submit" className={styles.save} disabled={saving || creating}>
						{saving || creating ? "Зберігається..." : saveButtonTitle}
					</button>
					<button type="button" className={styles.cancel} onClick={handleCancel}>
						Відмінити
					</button>
				</div>
		</form>
		)}
	</div>
	);
}

export default PatientsForm;