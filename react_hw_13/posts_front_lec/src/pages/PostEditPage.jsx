import { useCreatePostMutation, useGetPostByIdQuery, useUpdatePostMutation } from '@/api/postsApi';
import Spinner from "@/components/Spinner/Spinner";
import frontRoutes from "@/router/frontRoutes";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./PostEditPage.module.scss";

function PostEditPage() {
	const{id} = useParams()
	const [showSpinner, setShowSpinner] = useState(false);
	const[post, setPost] = useState(
		{
			title:'',
			body: '',
		})
	const { data:postData, isLoading, isError} = useGetPostByIdQuery(id,{skip:!id})
	const [updatePost, {isLoading:saving}] = useUpdatePostMutation()
	const [createPost, {isLoading:creating}] = useCreatePostMutation()
	const navigate = useNavigate()

	useEffect(() => {
	if (postData) setPost(postData)
	}, [postData])

	const handleChange =(e) =>{
		setPost((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	useEffect(() => {
		let timer;
		if (isLoading) {
			setShowSpinner(true);
		} else {
			timer = setTimeout(() => setShowSpinner(false), 1500);
		}
		return () => clearTimeout(timer);
	}, [isLoading]);

	const handleSubmit = async (e) =>{
		e.preventDefault()
		if (id) await updatePost(post)
			else await createPost(post)
		navigate(frontRoutes.navigator.posts.index)
	}

		const handleCancel = () => {
			navigate(frontRoutes.navigator.posts.index)
		}

	const saveButtonTitle= id? 'Зберегти': 'Створити'
	const isDisabled = !post.title || !post.body || saving || creating

	  if (isError) return <p>Помилка завантаження постів</p>
	//   if (isLoading) return <p>Завантаження...</p>
	return ( 
		<div className={styles.postEditWrapper}>
			<h2>{saveButtonTitle} пост</h2>
			{showSpinner ? (
					<Spinner />
				) : (
					<form onSubmit={handleSubmit}>
						<label> Заголовок поста
							<input name="title" type="text" value={post?.title} onChange={handleChange} className={!post.title ? styles.invalid : ""}/>
						</label>
						<label> Текст поста
							<textarea name="body" value={post?.body} onChange={handleChange}  className={!post.body ? styles.invalid : ""}/>
						</label>
						<div className={styles.actions}>
							<button type='submit' disabled={isDisabled} className={styles.save}>{saving?'Saving...': saveButtonTitle} </button>
							<button type="button" onClick={handleCancel} className={styles.cancel}>
								Відмінити
							</button>
						</div>
					</form>
				)}
		</div>
	 );
}

export default PostEditPage;
