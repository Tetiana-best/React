import styles from './PaginationBlock.module.scss';

function PaginationBlock({currentPageNumber, totalPagesNumber, onPageChange}) {
return (
	<div className={styles.pagination}>
		{totalPagesNumber > 1 ? (
		<button className={styles.pageBtn}
			disabled={currentPageNumber === 1}
			type="button"
			onClick={() => onPageChange(currentPageNumber - 1)}>
			Попередня
		</button>
		) : null}
		{Array.from({ length: totalPagesNumber }).map((_, index) => (
		<button key={index}
			onClick={() => onPageChange(index + 1)}
			className={`${styles.pageBtn} ${index + 1 === currentPageNumber ? styles.active : ''}`}
		>
			{index + 1}
		</button>))}
		{totalPagesNumber > 1 ? (
		<button className={styles.pageBtn}
			disabled={currentPageNumber === totalPagesNumber}
			type="button"
			onClick={() => onPageChange(currentPageNumber + 1)}>
			Наступна
		</button>
		) : null}
	</div>
);
}

export default PaginationBlock;