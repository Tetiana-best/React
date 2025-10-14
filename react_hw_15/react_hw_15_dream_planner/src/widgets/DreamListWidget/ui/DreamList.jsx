import DreamCard from "@/entities/dream/ui/DreamCard"
import { DeleteDreamButton } from "@/features/dream/delete-dream"
import { DetailDreamButton } from "@/features/dream/detail-dream"
import { EditDreamButton } from "@/features/dream/edit-dream"
import Spinner from "@/shared/spinner/Spinner"
import Pagination from "./Pagination/Pagination"

export const DreamList = ({dreams, page, setPage, hasMore, isLoading}) => {
	return(
		<div>
			{isLoading ? <Spinner /> : (
				dreams.length === 0 ? (<div>No dreams found...</div>):(
					dreams.map((dream)=> (
						<DreamCard key={dream.id} dream={dream} actions={[
							<DetailDreamButton dreamId={dream.id} key={`detail-${dream.id}`} />,
							<EditDreamButton dreamId={dream.id} key={`edit-${dream.id}`}/>,
							<DeleteDreamButton dreamId={dream.id} key={`delete-${dream.id}`}/>
						]} />
					))
				)
			)}
			<div>
				<Pagination page={page} setPage={setPage} hasMore={hasMore}/>
			</div>
		</div>
	)
}