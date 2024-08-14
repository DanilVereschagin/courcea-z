import React from 'react';

const CommentItem = ({ comment }) => {
	return (
		<div className='post'>
			<div>
				<strong>
					{comment.id}. {comment.name}
				</strong>
				<div>{comment.body}</div>
			</div>
		</div>
	);
};

export default CommentItem;
