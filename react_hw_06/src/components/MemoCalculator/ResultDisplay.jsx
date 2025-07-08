import React from 'react'

function ResultDisplay({result}) {
	console.log('Rendering ResultDisplay')
	return ( 
		<>
			<div>Результат A + B: {result}</div>
		</>

	 );
}

export default React.memo(ResultDisplay);