import { useState } from "react"

export const useFilterProduct = ()=>{
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearch = (e) => {
		const val = (e.target.value).toLowerCase()
		setSearchTerm(val)
	}
	return {searchTerm,handleSearch}
}