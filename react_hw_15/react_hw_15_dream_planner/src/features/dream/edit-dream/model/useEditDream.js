import { frontRoutes } from "@/app/router/frontRoutes"
import { useGetDreamByIdQuery, useUpdateDreamMutation } from "@/entities/dream"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { emptyDreamsData } from "../../dream-form"
import { useDreamForm } from "../../dream-form/model/useDreamForm"

export const useEditDream = (dreamId) => {
	const navigate = useNavigate()
	const {data:dreamData, isLoading: isLoadingDream, error: loadError} = useGetDreamByIdQuery(dreamId)
	const [updateDreamMutation, {isLoading:isUpdating, error:updateError}] = useUpdateDreamMutation()

	const {formData, setFormData, handleChange} = useDreamForm(emptyDreamsData)

	useEffect(()=>{
		if(dreamData){
			setFormData({
				titleDream: dreamData.titleDream ||'',
				yearOfDream: dreamData.yearOfDream ||'',
				friendToRealizeDream: dreamData.friendToRealizeDream ||'',
			})
		}
	},[dreamData, setFormData])

	const editDream = async () => {
		try {
			await updateDreamMutation({
				id: dreamId,
				data: formData,
			}).unwrap()
			navigate(frontRoutes.navigate.dreams.base)
			return true
		} catch (e) {
			console.error('Failed to update dream:', e);
			return false
		}
	}
	return{formData, setFormData, handleChange, isLoadingDream, loadError, isUpdating, updateError, editDream}
}