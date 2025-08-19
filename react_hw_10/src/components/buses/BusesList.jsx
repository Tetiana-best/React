import BusItem from "./BusItem";

function BusesList({busesList}) {
	return ( 
		<div>
			<h2>Автобуси</h2>
			<div>
				{busesList.length ? 
					busesList.map((bus) =>
						<BusItem key={bus.id} bus = {bus} />
					):
				<div>Список автобусів порожній</div>}
			</div>
		</div>
	 );
}

export default BusesList;