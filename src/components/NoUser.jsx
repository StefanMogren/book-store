import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import users from '../data/users';

function NoUser({ setUserLogin }) {
	const [allUsers, setAllUsers] = useState([]);
	if (allUsers.length < 1) {
		setAllUsers(users);
	}

	const [loginOrRegister, setLoginOrRegister] = useState(true);
	return (
		<main className='login'>
			{loginOrRegister ? (
				<LoginForm
					setUserLogin={setUserLogin}
					setLoginOrRegister={setLoginOrRegister}
					allUsers={allUsers}
				/>
			) : (
				<RegisterForm
					setLoginOrRegister={setLoginOrRegister}
					allUsers={allUsers}
					setAllUsers={setAllUsers}
				/>
			)}
		</main>
	);
}

export default NoUser;
