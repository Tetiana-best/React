import { useState, useCallback, useEffect } from "react";

function useWindowSize () {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)

	const handleResize = useCallback(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	 }, []);
	useEffect(()=>{
		window.addEventListener('resize', handleResize)

		return()=>{
			window.removeEventListener('resize', handleResize)
		}
	},[])
	return {width, height}
}

export default useWindowSize

