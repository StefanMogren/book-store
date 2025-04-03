import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function NoUser({ setUserLogin, allUsers, setAllUsers }) {
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
