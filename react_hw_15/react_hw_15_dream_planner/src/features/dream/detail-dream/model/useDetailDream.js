import { useGetDreamByIdQuery } from "@/entities/dream"

export const useDetailDream = (dreamId) => {
	const{data, isLoading, error} = useGetDreamByIdQuery(dreamId, {skip: !dreamId})

	return {dream: data, isLoading, error}
}