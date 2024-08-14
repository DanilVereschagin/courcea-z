import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import CommentList from '../components/Comment/CommentList';

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

	return (
		<div className='post__page'>
			{isLoading ? (
				<Loader />
			) : (
				<div style={{ fontSize: 20 }}>
					<strong>
						{post.id}. {post.title}
					</strong>
					<div>{post.body}</div>
				</div>
			)}
			{isComLoading ? <Loader /> : <CommentList comments={comments} />}
		</div>
	);
};

export default PostIdPage;
