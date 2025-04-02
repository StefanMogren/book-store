import LoginForm from './components/LoginForm';
import BookStore from './components/BookStore';
import { useState } from 'react';

function App() {
	const [userLogin, setUserLogin] = useState(null);

	let activeUser = userLogin;

	return (
		<div className='app'>
			{activeUser ? (
				<BookStore setUserLogin={setUserLogin} />
			) : (
				<LoginForm setUserLogin={setUserLogin} />
			)}
		</div>
	);
}

export default App;
