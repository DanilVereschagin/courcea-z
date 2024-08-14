import React, { useEffect, useState } from 'react';
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
import Pagination from '../components/UI/pagination/Pagination';
import Select from '../components/UI/select/Select';

function Posts() {
	const sortOptions = [
		{ name: 'По названию', value: 'title' },
		{ name: 'По описанию', value: 'body' },
	];

	const limitOptions = [
		{ name: '5', value: 5 },
		{ name: '10', value: 10 },
		{ name: '25', value: 25 },
		{ name: 'Показать всё', value: -1 },
	];

	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [visible, setVisible] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	const [fetchPosts, isPostsLoading, postError] = useFetching(
		async (limit, page) => {
			const response = await PostService.getAll(limit, page);
			setPosts(response.data);
			const totalCount = response.headers['x-total-count'];
			setTotalPages(getPageCount(totalCount, limit));
		}
	);

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page, limit]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setVisible(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
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

				<PostFilter
					filter={filter}
					setFilter={setFilter}
					options={sortOptions}
				/>
				<Select
					value={limit}
					onChange={(value) => setLimit(value)}
					defaultValue='Кол-во элементов на странице'
					options={limitOptions}
				/>
				{postError && <h1>Произошла ошибка: ${postError}</h1>}

				{isPostsLoading ? (
					<div className='loader-block'>
						<Loader />
					</div>
				) : (
					<PostList
						remove={removePost}
						posts={sortedAndSearchedPosts}
						title={'Список постов'}
					/>
				)}

				<Pagination
					totalPages={totalPages}
					page={page}
					changePage={changePage}
				/>
			</div>
		</>
	);
}

export default Posts;
