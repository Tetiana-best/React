import { useEffect, useState } from "react"
import { emptyDreamsData } from "./settings"

export const useDreamForm =(initialData = emptyDreamsData)=>{

	const [formData, setFormData] = useState(initialData)

	useEffect(() => {
		setFormData(initialData)
	},[initialData])

	const handleChange = (e) => {
		setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
	}

	return {formData, setFormData, handleChange}
}