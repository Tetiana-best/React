import { ResultsContext } from "@/context/ResultsContext";
import { useReducer } from "react";
import { RESULT_ACTIONS_TYPES } from "./resultActionsTypes.js";

const initialResultsData = {
	buses:[],
	hotels:[]
}
function resultReducer(currentState, action) {
	let newState
	const selectedId = action.payload
	switch (action.type) {
		case RESULT_ACTIONS_TYPES.ADD_BUS:
			newState = {
				...currentState, buses: [...currentState.buses, selectedId]
			}
			break;
		case RESULT_ACTIONS_TYPES.ADD_HOTEL:
		newState = {
			...currentState, hotels: [...currentState.hotels, selectedId]
		}
		break;
		case RESULT_ACTIONS_TYPES.REMOVE_BUS:
		newState = {
			...currentState, buses: currentState.buses.filter((bus)=>bus.id!==selectedId)
		}
		break;
		case RESULT_ACTIONS_TYPES.REMOVE_HOTEL:
		newState = {
			...currentState, hotels: currentState.hotels.filter((hotel)=>hotel.id!==selectedId)
		}
		break;
		case RESULT_ACTIONS_TYPES.RESET:
		newState = initialResultsData
		break;
		default:
			newState = currentState
	}
	return newState
}

function ResultsProvider({children}) {
	const[resultState, dispatch] = useReducer(resultReducer, initialResultsData)
	return ( 
		<ResultsContext value={{resultState,dispatch}}>
			{children}
		</ResultsContext>
	 );
}

export default ResultsProvider;