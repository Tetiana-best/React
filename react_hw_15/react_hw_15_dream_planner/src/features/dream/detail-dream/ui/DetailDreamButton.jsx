import { frontRoutes } from "@/app/router/frontRoutes";
import { Button } from '@/shared/ui/Button/Button';
import { useNavigate } from "react-router";
import { useDetailDream } from "../model/useDetailDream";
import styles from "./DetailDreamButton.module.scss";

export const DetailDreamButton = ({dreamId, className}) => {

	const{isLoading} = useDetailDream(dreamId)
	const navigate = useNavigate()

	const handleClick = async () => {
		navigate(frontRoutes.navigate.dreams.detail(dreamId))
	}
	
	return ( 
		<Button onClick={handleClick} disabled={isLoading} 
		className = {`${styles.detailDreamButton} ${className || ''} ${isLoading ? styles.disabled : ""}`}>
			Деталі
		</Button>
	 );
}