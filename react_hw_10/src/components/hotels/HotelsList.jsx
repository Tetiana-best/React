import HotelItem from './HotelItem'

function HotelsList({hotelsList}) {
	return ( 
		<div>
			<h2>Готелі</h2>
			<div>
				{hotelsList.length ? 
				hotelsList.map((hotel)=>
				<HotelItem key={hotel.id} hotel={hotel}/>
			)
				:<div>Список готелів порожній</div>}
			</div>
		</div>
	 );
}

export default HotelsList;