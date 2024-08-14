import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.css';
import PostList from '../components/Post/PostList';
import PostForm from '../components/Forms/PostForm';
import PostFilter from '../components/Post/PostFilter';
import Modal from '../components/UI/modal/Modal';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import ModalButton from '../components/UI/button/ModalButton';
import { useObserver } from '../hooks/useObserver';

function PostsFeed() {
	const options = [
		{ name: 'По названию', value: 'title' },
		{ name: 'По описанию', value: 'body' },
	];

	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [visible, setVisible] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastPost = useRef();

	const [fetchPosts, isPostsLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page);
			setPosts([...posts, ...response.data]);
			const totalCount = response.headers['x-total-count'];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useObserver(lastPost, page < totalPages, isPostsLoading, () => {
		setPage(page + 1);
	});

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setVisible(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	return (
		<>
			<div className='post__page'>
				<ModalButton
					style={{ marginTop: '10px' }}
					onClick={() => setVisible(true)}
				>
					Создать пост
				</ModalButton>
				<Modal visible={visible} setVisible={setVisible}>
					<PostForm create={createPost} />
				</Modal>
				<hr style={{ marginTop: '10px' }} />

				<PostFilter filter={filter} setFilter={setFilter} options={options} />
				{postError && <h1>Произошла ошибка: ${postError}</h1>}

				<PostList
					remove={removePost}
					posts={sortedAndSearchedPosts}
					title={'Список постов'}
				/>

				<div ref={lastPost} style={{ height: 20 }} />

				{isPostsLoading && (
					<div className='loader-block'>
						<Loader />
					</div>
				)}
			</div>
		</>
	);
}

export default PostsFeed;
