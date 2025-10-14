import { frontRoutes } from "@/app/router/frontRoutes";
import { useGetDreamsQuery } from "@/entities/dream";
import AddDreamButton from "@/features/dream/add-dream/ui/addDreamButton";
import { DreamList } from "@/widgets/DreamListWidget";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from './DreamsPage.module.scss';

export default function DreamsPage() {

	const [page, setPage] = useState(1)
	const [cursors, setCursors] = useState([])
	const perPage = 4

	const {data, isLoading} = useGetDreamsQuery(
		{ page, perPage, cursors},
		{ refetchOnMountOrArgChange: true }
	)
	const dreams = data?.data || []
	const hasMore = data?.hasMore

	useEffect(() => {
	if (data?.cursor && cursors.length < page) {
		setCursors((prev) => [...prev, data.cursor])
	}
	if (data?.data.length === 0 && page > 1) {
		setPage((p) => p - 1)
	}
	}, [data, cursors?.length, page])
	
	return ( 
		<div className={styles.container}>
				<Link to={frontRoutes.pages.home} className={styles.backButton}>
					⬅ На головну
				</Link>
				<h1>Список мрій</h1>
			<AddDreamButton />
			<DreamList dreams={dreams} page={page} setPage={setPage} 
			hasMore={hasMore} isLoading={isLoading} />
		</div>
	 );
}