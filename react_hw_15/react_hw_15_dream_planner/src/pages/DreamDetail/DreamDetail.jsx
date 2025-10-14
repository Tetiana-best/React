import { frontRoutes } from "@/app/router/frontRoutes";
import DreamCard from "@/entities/dream/ui/DreamCard";
import { DeleteDreamButton } from "@/features/dream/delete-dream";
import { useDetailDream } from "@/features/dream/detail-dream";
import { EditDreamButton } from "@/features/dream/edit-dream";
import Spinner from "@/shared/spinner/Spinner";
import { Button } from "@/shared/ui/Button/Button";
import { useNavigate, useParams } from "react-router";
import styles from "./DreamDetail.module.scss";

export default function DreamDetail() {
	const { id } = useParams()
	const navigate = useNavigate()

	const { dream, isLoading, error } = useDetailDream(id)

	if (isLoading) return <Spinner />
	if (error) return <div className={styles.error}>Помилка завантаження мрії 😢</div>
	if (!dream) return <div className={styles.notFound}>Мрію не знайдено</div>

	return (
		<div className={styles.detailsContainer}>
			<h1 className={styles.title}>Деталі мрії</h1>

			<DreamCard
			dream={dream}
			actions={[
				<EditDreamButton dreamId={dream.id} key={`edit-${dream.id}`} />,
				<DeleteDreamButton dreamId={dream.id} key={`delete-${dream.id}`} />,]}/>

			<Button onClick={() => navigate(frontRoutes.navigate.dreams.base)}>
			Назад до списку
			</Button>
		</div>
	);
}
