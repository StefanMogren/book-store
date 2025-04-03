import React from 'react';

function LogOut({ setUserLogin }) {
	const logOutUser = () => {
		console.log('User logged out!');

		setUserLogin(null);
	};

	return (
		<>
			<button
				className='header__log-out-btn'
				onClick={() => logOutUser()}>
				Log out
			</button>
		</>
	);
}

export default LogOut;
