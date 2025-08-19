import HotelsList from "@/components/hotels/HotelsList";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

function HotelsPage() {
	const { hotels } = useContext(DataContext)
	return ( 
		<div>
			<HotelsList hotelsList={hotels} />
		</div>
	 );
}

export default HotelsPage;