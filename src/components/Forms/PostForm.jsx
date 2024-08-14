import React from 'react';
import FormInput from '../UI/input/FormInput';
import FormButton from '../UI/button/FormButton';
import { useState } from 'react';

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' });

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		setPost({ title: '', body: '' });
	};

	return (
		<form>
			<FormInput
				type='text'
				placeholder='Название поста'
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
			/>
			<FormInput
				value={post.body}
				type='text'
				placeholder='Описание поста'
				onChange={(e) => setPost({ ...post, body: e.target.value })}
			/>
			<FormButton onClick={addNewPost}>Создать пост</FormButton>
		</form>
	);
};

export default PostForm;
