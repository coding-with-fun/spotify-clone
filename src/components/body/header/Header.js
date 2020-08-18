import React from 'react';
import './Header.css';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar } from '@material-ui/core';
import { useDataProviderValue } from '../../../contexts/DataContext';

const Header = () => {
	const [{ user }] = useDataProviderValue();
	console.log(user);
	return (
		<div className='header'>
			<div className='header__left'>
				<SearchOutlinedIcon />
				<input placeholder='Search' type='text' />
			</div>

			<div className='header__right'>
				<Avatar src={user?.images[0]?.url} alt='HP' />
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
};

export default Header;
