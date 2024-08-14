import React from 'react';
import classes from './Pagination.module.css';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
	const pagesArray = getPagesArray(totalPages);

	return (
		<div className={classes.page__wrapper}>
			{pagesArray.map((p) => (
				<spin
					onClick={() => changePage(p)}
					key={p}
					className={
						page === p
							? classes.page + ' ' + classes.page__current
							: classes.page
					}
				>
					{p}
				</spin>
			))}
		</div>
	);
};

export default Pagination;
