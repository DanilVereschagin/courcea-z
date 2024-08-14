import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
	return (
		<>
			<h1>Комментарии:</h1>
			<div>
				{comments.map((com) => (
					<CommentItem key={com.id} comment={com} />
				))}
			</div>
		</>
	);
};

export default CommentList;
