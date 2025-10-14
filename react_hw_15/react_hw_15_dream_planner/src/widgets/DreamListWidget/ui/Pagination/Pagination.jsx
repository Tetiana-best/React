import { Button } from "@/shared/ui/Button/Button";
import styles from "./Pagination.module.scss";

function Pagination({page, setPage, hasMore}) {
	return ( 
		<div className={styles.pagination}>
			<Button onClick={()=>setPage(page-1)} disabled={page<=1}>◀ Минула</Button>
			<span className={styles.pageInfo}>Сторінка {page}</span>
			<Button onClick={()=>setPage(page+1)} disabled={!hasMore}>Наступна ▶</Button>
		</div>
	 );
}

export default Pagination;