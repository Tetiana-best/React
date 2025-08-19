import { useContext} from 'react';
import styles from '@/components/buses/BusItem.module.scss'
import { ResultsContext } from "@/context/ResultsContext";
import { RESULT_ACTIONS_TYPES } from "@/providers/resultActionsTypes";

function BusItem({bus}) {
	const {resultState, dispatch} = useContext(ResultsContext)
	const isSelected = resultState.buses.some((b) => b.id === bus.id)

	const toggleSelect = () => {
		if (isSelected) {
			dispatch({
			type: RESULT_ACTIONS_TYPES.REMOVE_BUS,
			payload: bus.id,
			});
		} else {
			dispatch({
			type: RESULT_ACTIONS_TYPES.ADD_BUS,
			payload: bus,
			});
		}
	};
	return ( 
		<div className={styles['bus-item']}>
			<div className={styles['bus-item__info']}>
				<div className={styles['bus-item__image']}>
					<img src = {bus.image} alt="Bus"/>
				</div>
				<div className={styles['bus-item__description']}>
					<p>Маршрут: {bus.route}</p>
					<p>Час відправлення: {bus.departureTime}</p>
					<p>Ціна: {bus.price} грн</p>
				</div>
			</div>
			<button onClick={toggleSelect} className={isSelected ? styles['bus-item__button--selected'] : ''}>{isSelected ? 'Зняти бронь' : 'Забронювати'}</button>
		</div>
	 );
}

export default BusItem;