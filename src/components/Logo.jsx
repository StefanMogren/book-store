import React from 'react';
import mainLogo from '../assets/books.jpg';

export default function Logo() {
	return (
		<img
			className='header__logo'
			src={mainLogo}
			alt='Hög med böcker, logga'
		/>
	);
}
