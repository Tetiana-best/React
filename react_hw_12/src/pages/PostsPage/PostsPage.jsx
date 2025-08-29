import { setCurrentPage } from '@/store/postsSlice';
import { fetchPosts } from "@/store/postsThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationBlock from "./components/PaginationBlock/PaginationBlock";
import PostsList from "./components/PostsList";
import NewPostForm from './components/PostsList/NewPostForm';

function PostsPage() {
	const dispatch = useDispatch()
	const {
			postsList,
			currentPageNumber,
			postsNumberPerPage,
			totalPagesNumber,
			status,
			error,
	} = useSelector(state => state.posts)

	useEffect(()=>{
		dispatch(fetchPosts({
			pageNumber: currentPageNumber, 
			itemsPerPage: postsNumberPerPage,
			append: false}))
	},[dispatch, currentPageNumber, postsNumberPerPage])

	const onPageChange = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber))
	}

	return ( 
		<>
			<NewPostForm />
			<PostsList postsList={postsList} status={status}/>
			{/* {status==='loading'? <Spinner />:null} */}
			{status==='failed'? <div>{ error }</div>:null}

			{status !== "loading" && totalPagesNumber > 1 && (
  <PaginationBlock
    currentPageNumber={currentPageNumber}
    totalPagesNumber={totalPagesNumber}
    onPageChange={onPageChange}
  />
)}
	</>
	 );
}

export default PostsPage;