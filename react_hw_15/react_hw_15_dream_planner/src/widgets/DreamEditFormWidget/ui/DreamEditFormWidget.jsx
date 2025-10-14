import { useAddDream } from "@/features/dream/add-dream"
import { DreamForm, useDreamForm } from "@/features/dream/dream-form"
import { useEditDream } from "@/features/dream/edit-dream"
import Spinner from "@/shared/spinner/Spinner"

export const DreamEditFormWidget =({dreamId}) =>{
	const isNew=!dreamId
	const{addDream, isLoading : isAdding} = useAddDream()
	const {formData: editFormData, 
			setFormData:setEditFormData, 
			isLoadingDream, 
			isUpdating, 
			editDream} = useEditDream(dreamId)
	const {formData:addFormData, 
			setFormData: setAddFormData} = useDreamForm()
	
			const currentFormData = isNew ? addFormData : editFormData
			const setCurrentFormData = isNew ? setAddFormData : setEditFormData
			const currentIsLoading = isNew ? isAdding : isUpdating || isLoadingDream

		const handleChange = (e) => {
		const { name, value } = e.target
		setCurrentFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e)=>{
		e.preventDefault()
		if(isNew) {
			await addDream(currentFormData)
		} else {
			await editDream()
		}
	}
		if(!isNew && isLoadingDream) return <Spinner />

	return(
		<DreamForm 
			formData = {currentFormData} 
			handleChange = {handleChange} 
			isSubmitting = {currentIsLoading} 
			dreamId = {dreamId} 
			onSubmit = {handleSubmit}
			isNew= {isNew} />
	)
}