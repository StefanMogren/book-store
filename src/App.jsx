import NoUser from './components/NoUser';
import BookStore from './components/BookStore';
import { useState } from 'react';

function App() {
	const [userLogin, setUserLogin] = useState(null);
	// const []

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

export default App;
