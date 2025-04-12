import BookStore from './components/BookStore';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import users from './data/users';
import BookPage from './components/BookPage';
import RootLayout from './components/RootLayout';

function App() {
	const [allUsers, setAllUsers] = useState([]);

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

	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
