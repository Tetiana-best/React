export default function MenuList({ onSelect }) {
	const items = [
	  { id: 1, label: 'Task 1. MemoCalculator' },
	  { id: 2, label: 'Task 2. Filter' },
	  { id: 3, label: 'Task 3. useWindowSize' },
	  { id: 4, label: 'Task 4. useDebounce' },
	//   { id: 5, label: 'Task 5. Data' },
	//   { id: 6, label: 'Task 6. Kitchen'},
	]
 
	return (
	  <nav>
		 <ul className = "task_buttons">
			{items.map((item) => (<li key={item.id}>
				 <button onClick={() => onSelect(item.id)}>{item.label}</button>
			  </li>
			))}
		 </ul>
	  </nav>
	)
 }