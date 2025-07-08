import { useState } from 'react'
import MenuList from './MenuList'

import {DebouncedSearch} from './components/DebouncedSearch/DebouncedSearch'
import {WindowSizeViewer} from './components/WindowSizeViewer/WindowSizeViewer'
import {MemoCalculator} from './components/MemoCalculator/MemoCalculator'
import {DataGrid} from './components/Filter/DataGrid'



function App() {
	const [activeTask, setActiveTask] = useState(1)

	return (
		<>
			<header className="header">
				<MenuList onSelect={setActiveTask} />
			</header>
			<main>
				{activeTask === 1 && <MemoCalculator />}
				{activeTask === 2 && <DataGrid/>}
				{activeTask === 3 && <WindowSizeViewer />}
				{activeTask === 4 && <DebouncedSearch />} 
				{/*activeTask === 5 && <WebsitesList />}
				{activeTask === 6 && <CanteenOrders />} */}
			</main>
		</>
	)
}
export default App
