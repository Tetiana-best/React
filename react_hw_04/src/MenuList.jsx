export default function MenuList({ onSelect }) {
	const items = [
	  { id: 1, label: 'Task 1. Messenger' },
	  { id: 2, label: 'Task 2. Game' },
	//   { id: 3, label: 'Task 3. Dancing' },
	//   { id: 4, label: 'Task 4. Translator' },
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