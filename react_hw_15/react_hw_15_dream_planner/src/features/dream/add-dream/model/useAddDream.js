import { frontRoutes } from "@/app/router/frontRoutes"
import { useAddDreamMutation } from "@/entities/dream"
import { useNavigate } from "react-router"

export const useAddDream = () =>{
	const [addDreamMutation, {isLoading, error}] = useAddDreamMutation()
	const navigate = useNavigate()

	const addDream = async (dreamData) => {
		try {
			await addDreamMutation(dreamData).unwrap()
			setTimeout(() => {
				navigate(frontRoutes.navigate.dreams.base)
			}, 300)
			return true
		} catch (e) {
			console.error('Failed to add dream:', e)
			return false
		}
	}
	return {addDream, isLoading, error}
}