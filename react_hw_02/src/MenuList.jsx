export default function MenuList({ onSelect }) {
	const items = [
	  { id: 1, label: 'Task 1. Login' },
	  { id: 2, label: 'Task 2. Tickets' },
	  { id: 3, label: 'Task 3. Translator' },
	  { id: 4, label: 'Task 4. List' },
	  { id: 5, label: 'Task 5. Data' },
	  { id: 6, label: 'Task 6. Kitchen'},
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