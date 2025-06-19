import { useState } from 'react'
import MenuList from './MenuList'

import {LoginForm} from './components/LoginForm'
import {TicketsType} from './components/TicketsType/TicketsType'
import {TranslatorTrainer} from './components/TranslatorTrainer/TranslatorTrainer'
import {SalaryList} from './components/SalaryList/SalaryList'
import {WebsitesList} from './components/WebsitesList/WebsitesList'
import {CanteenOrders} from './components/CanteenOrders/CanteenOrders'

function App() {
	const [activeTask, setActiveTask] = useState(1)

	return (
		<>
			<header className="header">
				<MenuList onSelect={setActiveTask} />
			</header>
			<main>
				{activeTask === 1 && <LoginForm />}
				{activeTask === 2 && <TicketsType />}
				{activeTask === 3 && <TranslatorTrainer />} 
				{activeTask === 4 && <SalaryList />}
				{activeTask === 5 && <WebsitesList />}
				{activeTask === 6 && <CanteenOrders />}
			</main>
		</>
	)
}
export default App

