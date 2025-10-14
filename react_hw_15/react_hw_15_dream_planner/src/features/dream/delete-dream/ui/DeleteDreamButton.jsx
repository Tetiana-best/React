import { useDeleteDreamMutation } from "@/entities/dream";
import { Button } from '@/shared/ui/Button/Button';
import styles from "./DeleteDreamButton.module.scss";

export const DeleteDreamButton = ({dreamId, className, onDeleted}) => {

	const[handleDeleteDream, {isLoading}] = useDeleteDreamMutation()

	const handleClick = async () => {
		const success = await handleDeleteDream(dreamId)
		if(success&&onDeleted) onDeleted(dreamId)
	}
	
	return ( 
		<Button onClick={handleClick} disabled={isLoading} 
		className = {`${styles.deleteDreamButton} ${className || ''} {isLoading ? styles.disabled : ""}`}>
			{isLoading ? 'Видаляється...' : 'Видалити'}
		</Button>
	 );
}