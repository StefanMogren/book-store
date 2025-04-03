import React from 'react';

export default function LogOut({ setUserLogin }) {
	const logOutUser = () => {
		console.log('User logged out!');

		setUserLogin(null);
	};

	return (
		<>
			<button onClick={() => logOutUser()}>Log out</button>
		</>
	);
}
