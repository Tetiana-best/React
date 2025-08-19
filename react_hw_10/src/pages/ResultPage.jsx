import BusItem from "@/components/buses/BusItem";
import HotelItem from "@/components/hotels/HotelItem";
import { ResultsContext } from "@/context/ResultsContext";
import { useContext } from "react";
import { Link } from "react-router";
import frontRoutes from '@/router/frontRoutes'
import { RESULT_ACTIONS_TYPES } from "@/providers/resultActionsTypes";

function ResultPage() {
	const { resultState, dispatch } = useContext(ResultsContext)
	const reset = () => {
		dispatch({
			type: RESULT_ACTIONS_TYPES.RESET,
		})
	}
	return ( 
		<div>
			<div>
				<h2>Обрані автобуси</h2>
				{resultState.buses.length ? 
						resultState.buses.map((bus) =>
							<BusItem key={bus.id} bus = {bus} />
						):
						<div>
							<div style={{ color: 'red' }}>Ви ще не обрали автобус</div>
							<Link to={frontRoutes.navigator.buses}>
								<button>Вибрати автобус</button>
							</Link>
						</div>
					}
			</div>
			<div>
				<h2>Обрані готелі</h2>
				{resultState.hotels.length ? 
						resultState.hotels.map((hotel) =>
							<HotelItem key={hotel.id} hotel = {hotel} />
						):
						<div>
							<div style={{ color: 'red' }}>Ви ще не обрали готель</div>
							<Link to={frontRoutes.navigator.hotels}>
								<button>Вибрати готель</button>
							</Link>
						</div>
					}
			</div>
			{(resultState.buses.length > 0 || resultState.hotels.length > 0) && <button onClick={reset}>Очистити</button>}
		</div>

	 );
}

export default ResultPage;