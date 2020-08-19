export const authEndPoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:3000/';
const clientId = '9fa34f4f81934f59bacd599a107bc14c';

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			var parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20',
)}&response_type=token&show_dialog=true`;
