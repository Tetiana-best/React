import Spinner from "@/components/Spinner/Spinner";
import { setCurrentPage } from "@/store/postsSlice";
import { fetchPosts } from "@/store/postsThunks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "./components/PostsList";
import NewPostForm from './components/PostsList/NewPostForm';

function PostsPageInfinity() {
const dispatch = useDispatch()

const {
	postsList,
	postsNumberPerPage,
	totalPagesNumber,
	currentPageNumber,
	status,
	error,
} = useSelector((state) => state.posts)

useEffect(() => {
	dispatch(
		fetchPosts({
		pageNumber: 1,
		itemsPerPage: postsNumberPerPage,
		append: false,
		})
	)
}, [dispatch, postsNumberPerPage])

useEffect(() => {
	const handleScroll = () => {
		const distanceFromBottom = 200
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

	if (
	scrollTop + clientHeight >= scrollHeight - distanceFromBottom &&
	currentPageNumber < totalPagesNumber &&
	status !== "loading"
	) {
	const nextPage = currentPageNumber + 1;
	dispatch(
		fetchPosts({
			pageNumber: nextPage,
			itemsPerPage: postsNumberPerPage,
			append: true,
		})
	)
	dispatch(setCurrentPage(nextPage))
	}
}
	window.addEventListener("scroll", handleScroll)
	return () => window.removeEventListener("scroll", handleScroll)
}, [dispatch, currentPageNumber, totalPagesNumber, postsNumberPerPage, status])

	return (
		<div>
			<NewPostForm />
			<PostsList postsList={postsList} />
			{status==='loading'? <Spinner />:null}
			{status === "failed" && <div>{error}</div>}
		</div>
	)
}

export default PostsPageInfinity;
