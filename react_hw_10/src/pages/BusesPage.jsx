import BusesList from "@/components/buses/BusesList";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";


function BusesPage() {
	const { buses } = useContext(DataContext)
	return ( 
		<div>
			<BusesList busesList={buses} />
		</div>
	 );
}

export default BusesPage;