import React from 'react';
import './Login.css';
import logo from '../../images/spotify_logo.jpg';
import { loginURL } from '../../spotify';

const Login = () => {
	return (
		<div className='login'>
			<img src={logo} alt='Spotify Logo' />
			<a href={loginURL}>LOGIN WITH SPOTIFY</a>
		</div>
	);
};

export default Login;
