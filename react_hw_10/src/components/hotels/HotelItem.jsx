import { useContext} from 'react';
import styles from '@/components/hotels/HotelItem.module.scss'
import { ResultsContext } from "@/context/ResultsContext";
import { RESULT_ACTIONS_TYPES } from "@/providers/resultActionsTypes";

function HotelItem({hotel}) {
	const {resultState, dispatch} = useContext(ResultsContext)
		const isSelected = resultState.hotels.some((h) => h.id === hotel.id)
	
		const toggleSelect = () => {
			if (isSelected) {
				dispatch({
				type: RESULT_ACTIONS_TYPES.REMOVE_HOTEL,
				payload: hotel.id,
				});
			} else {
				dispatch({
				type: RESULT_ACTIONS_TYPES.ADD_HOTEL,
				payload: hotel,
				});
			}
		};
	return ( 
				<div className={styles['hotel-item']}>
					<div className={styles['hotel-item__info']}>
						<div className={styles['hotel-item__image']}>
							<img src = {hotel.image} alt="Hotel"/>
						</div>
						<div className={styles['hotel-item__description']}>
							<p>Місто: {hotel.city}</p>
							<p>Назва готелю: {hotel.name}</p>
							<p>Рейтинг: {hotel.rating}</p>
							<p>Ціна: {hotel.pricePerNight} грн</p>
						</div>
					</div>
					<button onClick={toggleSelect} className={isSelected ? styles['hotel-item__button--selected'] : ''}>{isSelected ? 'Зняти бронь' : 'Забронювати'}</button>
				</div>
	 );
}

export default HotelItem;