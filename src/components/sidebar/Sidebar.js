import React from 'react';
import './Sidebar.css';
import logo from '../../images/spotify_logo.jpg';
import SidebarOption from './sidebarOption/SidebarOption';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataProviderValue } from '../../contexts/DataContext';

const Sidebar = () => {
	const [{ playlists }] = useDataProviderValue();
	return (
		<div className='sidebar'>
			<img className='sidebar__logo' src={logo} alt='Spotify Logo' />

			<SidebarOption Icon={HomeOutlinedIcon} title='Home' />
			<SidebarOption Icon={SearchOutlinedIcon} title='Search' />
			<SidebarOption Icon={LibraryMusicOutlinedIcon} title='Your Library' />

			<br />
			<strong className='sidebar__playlists'>PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
		</div>
	);
};

export default Sidebar;
