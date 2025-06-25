import { useState } from 'react'
import MenuList from './MenuList'

import {TemperatureColorChange} from './components/TemperatureColorChange/TemperatureColorChange'
import {SpeedLimit} from './components/SpeedLimit/SpeedLimit'
import {CouplesForDancing} from './components/CouplesForDancing/CouplesForDancing'
import {WordMatchingGame} from './components/WordMatchingGame/WordMatchingGame'


function App() {
	const [activeTask, setActiveTask] = useState(1)

	return (
		<>
			<header className="header">
				<MenuList onSelect={setActiveTask} />
			</header>
			<main>
				{activeTask === 1 && <TemperatureColorChange />}
				{activeTask === 2 && <SpeedLimit />}
				{activeTask === 3 && <CouplesForDancing />} 
				{activeTask === 4 && <WordMatchingGame />}
				{/*activeTask === 5 && <WebsitesList />}
				{activeTask === 6 && <CanteenOrders />} */}
			</main>
		</>
	)
}
export default App
