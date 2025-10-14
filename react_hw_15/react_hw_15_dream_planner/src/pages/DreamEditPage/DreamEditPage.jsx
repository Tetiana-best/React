import { DreamEditFormWidget } from "@/widgets/DreamEditFormWidget/";
import { useParams } from "react-router";

export default function DreamEditPage() {
	const {id} = useParams()
	return ( 
			<DreamEditFormWidget 
			dreamId={id} />
	 );
}
