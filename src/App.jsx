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
	// const { allUsers, setAllUsers } = useOutletContext();

	const [allUsers, setAllUsers] = useState([]);
	const [userLogin, setUserLogin] = useState(true);

	if (allUsers.length < 1) {
		setAllUsers(users);
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
