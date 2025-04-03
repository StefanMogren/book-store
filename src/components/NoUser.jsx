import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function NoUser({ setUserLogin }) {
	const [loginOrRegister, setLoginOrRegister] = useState(true);
	return (
		<main className='login'>
			{loginOrRegister ? (
				<LoginForm
					setUserLogin={setUserLogin}
					setLoginOrRegister={setLoginOrRegister}
				/>
			) : (
				<RegisterForm setLoginOrRegister={setLoginOrRegister} />
			)}
		</main>
	);
}
