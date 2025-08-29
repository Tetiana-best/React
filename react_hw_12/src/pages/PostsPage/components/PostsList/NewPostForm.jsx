import { addPost } from "@/store/postsThunks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './NewPostForm.module.scss';

function NewPostForm() {
	const[post, setPost] = useState(
		{
			title:'',
			text: '',
			authorId:''
		})

	const dispatch = useDispatch()

	const handleSubmit =(e) =>{
		e.preventDefault()
		dispatch(addPost(post))
		setPost({ title: '', text: '', authorId: '' })
	}
	const handleChange =(e) =>{
		setPost((prev) => ({...prev, [e.target.name]: e.target.value}))
	}

	return ( 
		<form onSubmit={handleSubmit} className={styles.newPostForm}>
			<label> Заголовок
				<input name="title" type="text" value={post.title} onChange={handleChange}/>
			</label>
			<label> Текст
				<textarea name="text" value={post.text} onChange={handleChange}/>
			</label>
			<label> ID автора
				<input name="authorId" type="number" min={0} value={post.authorId} onChange={handleChange}/>
			</label>
			<button type="submit" 
				disabled={(!post.title||!post.text||Number(post.authorId)<=0)? 'not-allowed':''}>
					Додати пост до списку
			</button>
		</form>
	 );
}

export default NewPostForm;