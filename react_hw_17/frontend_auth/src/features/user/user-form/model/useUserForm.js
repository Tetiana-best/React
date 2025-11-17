import { useEffect, useState } from "react"
import { emptyUsersData } from "./settings"

export const useUserForm =(initialData = emptyUsersData)=>{

	const [formData, setFormData] = useState(initialData)

	useEffect(() => {
		setFormData(initialData)
	},[initialData])

	const handleChange = (e) => {
		setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
	}

	return {formData, setFormData, handleChange}
}