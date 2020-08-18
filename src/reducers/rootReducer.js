export const initialState = {
	user: null,
	playlists: [],
	isPlaying: false,
	item: null,
	token:
		'BQBWvrwnjm3_0LdUfG9ZhaHV9JQO6AFTa7n7ua2V6lp14n7zHf9aric86Pbz1NK16ottR1Qsd88konp2b_pxop4DsTjc31WQQsceUROBFn_g0oD9l8CepN2VSvkdGXe1vv7sEWmjL-r5Ycm5UxNxGGgzIT3MH-wmvUxpdkesSByeEtDlTDHmSW-C',
};

const rootReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		default: {
			return state;
		}
	}
};

export default rootReducer;
