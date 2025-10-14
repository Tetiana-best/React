import { Card } from '@/shared/ui/Card/Card';
import { Fragment } from 'react';

function DreamCard({dream, actions}) {
	return ( 
		<Card>
			<h3 title={dream.title}>Запланована мрія: {dream.titleDream}</h3>
			<p>Рік досягнення мрії: <span>{dream.yearOfDream}</span></p>
			<p>Друг, з яким хочу реалізувати мрію: <span>{dream.friendToRealizeDream}</span></p>
			{actions && actions.map((action, index)=>(
				<Fragment key={index}>{action}</Fragment>
			))}
		</Card>
	 );
}

export default DreamCard;