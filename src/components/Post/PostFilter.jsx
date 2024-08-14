import React from 'react';
import FormInput from '../UI/input/FormInput';
import Select from '../UI/select/Select';

const PostFilter = ({ filter, setFilter, options }) => {
	return (
		<div>
			<FormInput
				placeholder='Поиск...'
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
			/>

			<Select
				value={filter.sort}
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue='Сортировка по...'
				options={options}
			/>
		</div>
	);
};

export default PostFilter;
