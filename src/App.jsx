import NoUser from './components/NoUser';
import BookStore from './components/BookStore';
import { useState } from 'react';
import users from './data/users';

function App() {
	const [allUsers, setAllUsers] = useState([]);
	if (allUsers.length < 1) {
		setAllUsers(users);
	}
	const [userLogin, setUserLogin] = useState(null);
	// const []

	return (
		<div className='app'>
			{userLogin ? (
				<BookStore userLogin={userLogin} setUserLogin={setUserLogin} />
			) : (
				<NoUser
					setUserLogin={setUserLogin}
					allUsers={allUsers}
					setAllUsers={setAllUsers}
				/>
			)}
		</div>
	);
}

export default App;
