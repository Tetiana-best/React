import { DataContext } from "@/context/DataContext";
import buses from '@/data/buses.json'
import hotels from '@/data/hotels.json'

function DataProvider({children}) {
	const data ={
		buses,
		hotels
	}
	return <DataContext value={data}>
		{children}
	</DataContext>
}

export default DataProvider;