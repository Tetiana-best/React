import { useState } from 'react'
import MenuList from './MenuList'

import {MessengerManager} from './MessengerSimulator/MessengerManager'
import {GameManager} from './GuessNumberGame/GameManager'
// import {CouplesForDancing} from './components/CouplesForDancing/CouplesForDancing'
// import {WordMatchingGame} from './components/WordMatchingGame/WordMatchingGame'


function App() {
	const [activeTask, setActiveTask] = useState(1)

	return (
		<>
			<header className="header">
				<MenuList onSelect={setActiveTask} />
			</header>
			<main>
				{activeTask === 1 && <MessengerManager />}
				{activeTask === 2 && <GameManager />}
				{/*activeTask === 3 && <CouplesForDancing />} 
				{activeTask === 4 && <WordMatchingGame />} */}
				{/*activeTask === 5 && <WebsitesList />}
				{activeTask === 6 && <CanteenOrders />} */}
			</main>
		</>
	)
}
export default App
