import { frontRoutes } from "@/app/router/frontRoutes";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useNavigate } from "react-router";
import styles from "./DreamForm.module.scss";

export const DreamForm = ({formData, handleChange,isSubmitting,isNew,onSubmit}) => {
	const navigate = useNavigate()
	const saveButtonTitle = isNew ? 'Створити' : 'Зберегти'
	return(
		<form onSubmit={onSubmit}  className={styles.form}>
			<h2>{isNew? 'Додавання нової' : "Редагування"} мрії</h2>
			<label htmlFor="titleDream">Назва мрії</label>
			<Input type="text" value={formData.titleDream} onChange={handleChange}
				placeholder="Введіть назву мрії" name='titleDream' 
				id="titleDream" disabled={isSubmitting} required autoFocus/>

			<label htmlFor="yearOfDream">Запланований рік досягнення мрії</label>
			<Input type="number" min="2024" value={formData.yearOfDream} onChange={handleChange}
				placeholder="Введіть рік..." name='yearOfDream' 
				id="yearOfDream" disabled={isSubmitting} required/>

			<label htmlFor="friendToRealizeDream">Ім'я друга, з яким хочете реалізувати мрію</label>
			<Input type="text" value={formData.friendToRealizeDream} onChange={handleChange}
				placeholder="Введіть ім'я друга.." name='friendToRealizeDream'
				id="friendToRealizeDream" disabled={isSubmitting} required/>

			<Button  type="submit" disabled={isSubmitting}>{isSubmitting ? "Зберігається..." : saveButtonTitle}</Button>
			<Button  type="button" onClick={()=> navigate(frontRoutes.navigate.dreams.base)}>Скасувати</Button>
		</form>
	)
}