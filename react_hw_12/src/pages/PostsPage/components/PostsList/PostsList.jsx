import Spinner from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";
import PostsItemCart from "./PostsItemCart";

function PostsList({postsList, status}) {
		const [showSpinner, setShowSpinner] = useState(false);

		useEffect(() => {
			let timer;
			if (status === "loading") {
				setShowSpinner(true)
			} else {
				timer = setTimeout(() => setShowSpinner(false), 50)
			}
			return () => clearTimeout(timer)
		}, [status])

	return ( 
		<div>
			{postsList.length ? (
				postsList.map((post)=>
				<PostsItemCart key={post.id} postsData={post}/>)
			)
			: (<div>Список порожній</div>)}
			{showSpinner && <Spinner />}
		</div>
	 );
}

export default PostsList