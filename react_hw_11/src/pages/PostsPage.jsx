import Spinner from "@/components/Spinner/Spinner";
import { fetchPosts } from '@/store/postsThunk';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function PostsPage() {
	const { postsList, loading, error } = useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const [showSpinner, setShowSpinner] = useState(false);

	useEffect(() => {
			let timer;
			if (loading) {
				setShowSpinner(true);
			} else {
				timer = setTimeout(() => setShowSpinner(false), 1500);
			}
			return () => clearTimeout(timer);
		}, [loading]);

	// useEffect(() => {
	// 	dispatch(fetchPosts())
	// }, [dispatch])
	return ( 
		<div>
			<h2>Список постів</h2>
			<button onClick={() => dispatch(fetchPosts())}>Завантажити пости</button>
			{error && <p>Помилка: {error}</p>}
			{showSpinner  ? (
					<Spinner />
				) : (
			
			<ul>
				{postsList.length? postsList.map((post)=>
				<li key={post.id}>{post.title}</li>
				):
				<div>Список порожній</div>
				}
			</ul>)
			}
		</div>
	 );
}

export default PostsPage;