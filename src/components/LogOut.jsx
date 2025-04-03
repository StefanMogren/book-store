import React from 'react';

function LogOut({ userLogin, setUserLogin }) {
	const logOutUser = () => {
		console.log(`User ${userLogin} logged out!`);

		setUserLogin(null);
	};

	return (
		<>
			<button
				className='header__log-out-btn'
				onClick={() => logOutUser()}>
				<span>Log out</span>
				<span>{userLogin}</span>
			</button>
		</>
	);
}

export default LogOut;
