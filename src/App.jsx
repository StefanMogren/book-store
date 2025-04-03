import NoUser from './components/NoUser';
import BookStore from './components/BookStore';
import { useState } from 'react';

export default function App() {
	const [userLogin, setUserLogin] = useState(null);

	let activeUser = userLogin;

	return (
		<div className='app'>
			{activeUser ? (
				<BookStore setUserLogin={setUserLogin} />
			) : (
				<NoUser setUserLogin={setUserLogin} />
			)}
		</div>
	);
}
