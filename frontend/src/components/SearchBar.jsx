import React, { useState } from 'react';
import { Input, Radio } from 'antd';
import { SEARCH_KEY } from '../constants';
const { Search } = Input;

const SearchBar = () => {
	const [searchType, setSearchType] = useState(SEARCH_KEY.all);
	const [error, setError] = useState('');

	const handleSearch = value => {
		if (searchType !== SEARCH_KEY.all && value === '') {
			setError('Please input your search keyword!');
			return;
		}

		setError('');
	};

	const changeSearchType = event => {
		setError('');
		setSearchType(event.target.value);
	};

	return (
		<div className='search-bar'>
			<Search
				placeholder='input search text'
				allowClear
				enterButton='Search'
				size='large'
				onSearch={handleSearch}
				disabled={searchType === SEARCH_KEY.all}
			/>
			<p className='error-msg'>{error}</p>

			<Radio.Group onChange={changeSearchType} value={searchType} className='search-type-group'>
				{Object.keys(SEARCH_KEY).map(item => (
					<Radio key={item} value={SEARCH_KEY[item]}>
						{item.charAt(0).toUpperCase() + item.slice(1)}
					</Radio>
				))}
			</Radio.Group>
		</div>
	);
};

export default SearchBar;
