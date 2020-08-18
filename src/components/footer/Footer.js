import React from 'react';
import './Footer.css';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__left'>
				<img
					className='footer__albumLogo'
					src='https://upload.wikimedia.org/wikipedia/commons/e/e8/2018-12-20-Turkish_pastry_with_cream_filling-1253.jpg'
					alt=''
				/>
				<div className='footer__songInfo'>
					<h4>Yeah!</h4>
					<p>Arijit</p>
				</div>
			</div>

			<div className='footer__center'>
				<ShuffleIcon className='footer__green' />
				<SkipPreviousIcon className='footer__icon' />
				<PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
				<SkipNextIcon className='footer__icon' />
				<RepeatIcon className='footer__green' />
			</div>

			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon className='footer__icon' />
					</Grid>
					<Grid item>
						<VolumeDownIcon className='footer__icon' />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
