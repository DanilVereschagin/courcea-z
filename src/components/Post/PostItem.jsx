import React from 'react';
import FormButton from '../UI/button/FormButton';
import { useNavigate } from 'react-router-dom';

const PostItem = ({ remove, ...props }) => {
	const router = useNavigate();
	return (
		<div className='post'>
			<div>
				<strong>
					{props.post.id}. {props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<div className='post__btns'>
				<FormButton onClick={() => router(`/posts/${props.post.id}`)}>
					Открыть
				</FormButton>
				<FormButton onClick={() => remove(props.post)}>Удалить</FormButton>
			</div>
		</div>
	);
};

export default PostItem;
