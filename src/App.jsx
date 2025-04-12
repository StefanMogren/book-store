import NoUser from './components/NoUser';
import BookStore from './components/BookStore';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import users from './data/users';
import BookPage from './components/BookPage';
import Header from './components/Header';
import RootLayout from './components/RootLayout';

function App() {
	// const [cartAmount, setCartAmount] = useState(0);
	const [allUsers, setAllUsers] = useState([]);

	if (allUsers.length < 1) {
		setAllUsers(users);
	}

	//Ska vara false
	const [userLogin, setUserLogin] = useState(true);

	{
		/* <BookStore
		userLogin={userLogin}
		setUserLogin={setUserLogin}
		cartAmount={cartAmount}
		setCartAmount={setCartAmount}
	/>; */
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			children: [
				{
					path: '',
					element: <BookStore />,
				},
				{
					path: 'book/:id',
					element: <BookPage />,
				},
			],
		},
	]);

	const initialization = () => {
		if (userLogin) {
			return (
				<>
					<RouterProvider router={router} />
				</>
				// <BookStore  />
			);
		} else {
			return (
				<NoUser
					setUserLogin={setUserLogin}
					allUsers={allUsers}
					setAllUsers={setAllUsers}
				/>
			);
		}
	};

	return <div className='app'>{initialization()}</div>;
}

export default App;
