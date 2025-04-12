import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function NoUser() {
	const [loginOrRegister, setLoginOrRegister] = useState(true);
	return (
		<main className='login'>
			{loginOrRegister ? (
				<LoginForm setLoginOrRegister={setLoginOrRegister} />
			) : (
				<RegisterForm setLoginOrRegister={setLoginOrRegister} />
			)}
		</main>
	);
}

export default NoUser;
