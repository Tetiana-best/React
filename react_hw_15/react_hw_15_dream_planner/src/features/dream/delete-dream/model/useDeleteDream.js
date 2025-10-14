import { useDeleteDreamMutation } from "@/entities/dream"

export const useDeleteDream = () => {
	const[deleteDreamMutation, {isLoading, error}] = useDeleteDreamMutation()

	const handleDeleteDream = async (dreamId) => { 
		if(window.confirm('Are you sure you want to delete this product?'))
		try {
			await deleteDreamMutation(dreamId).unwrap()
			console.log(`Product ${dreamId} deleted successfully.`);
			return true
		} catch (e) {
			console.log('Failed to delete dream:', e)
			return false
		}
		return false
	}
	return {handleDeleteDream, isLoading, error}
}