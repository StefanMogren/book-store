import React from 'react';
import mainLogo from '../assets/books.jpg';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link to={'/'}>
			<img
				className='header__logo'
				src={mainLogo}
				alt='Hög med böcker, logga'
			/>
		</Link>
	);
}

export default Logo;
