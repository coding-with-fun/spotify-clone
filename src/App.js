import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';
import { useDataProviderValue } from './contexts/DataContext';

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataProviderValue();

	useEffect(() => {
		const hash = getTokenFromUrl();

		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user,
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists,
				});
			});
		}
	}, []);

	return (
		<div className='App'>
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
