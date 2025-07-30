import { useEffect, useState } from 'react'

function useFetch({url, triggers = []}) {
	const[data, setData] = useState(null)
	const[isLoading, setIsLoading] = useState(false)
	const[error, setError] = useState(false)

	useEffect(() => {
		if(!url){
			setError('URL не передано до useFetch')
			setIsLoading(false)
			return
		}
		async function fetchData() {
			try {
				setIsLoading(true)
				setError(null)
				const res = await fetch(url)
				const jsonData = await res.json()
				if(res.ok && jsonData) setData(jsonData)
				else setError('Дані не знайдено або помилкова відповідь сервера')
				// const res = await fetch(apiRoutes.getProductById(id))
			} catch (error) {
				setError(error.message || 'Невідома помилка при завантаженні')
			}
			finally {
			setIsLoading(false)
		}
	}
		fetchData()
	}, [url, ...triggers])

	return {data, isLoading, error}
}

export default useFetch;

