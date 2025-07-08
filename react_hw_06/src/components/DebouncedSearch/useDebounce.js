import { useState, useEffect } from "react";

function useDebounce(searchValue, delay) {
	const [debouncedValue, setDebouncedValue] = useState()

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(searchValue);
		}, delay);
	 
		return () => clearTimeout(timeout);
	 }, [searchValue]);


	return debouncedValue
}

export default useDebounce;