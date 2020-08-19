import React from 'react';
import './Sidebar.css';
import SidebarOption from './sidebarOption/SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataProviderValue } from '../../contexts/DataContext';

const Sidebar = () => {
	const [{ playlists }] = useDataProviderValue();
	return (
		<div className='sidebar'>
			<img
				className='sidebar__logo'
				src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
				alt='Spotify Logo'
			/>
			<SidebarOption Icon={HomeOutlinedIcon} title='Home' />
			<SidebarOption Icon={SearchOutlinedIcon} title='Search' />
			<SidebarOption Icon={LibraryMusicOutlinedIcon} title='Your Library' />

			<br />
			<strong className='sidebar__playlists'>PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} key={playlist.id} />
			))}
		</div>
	);
};

export default Sidebar;
