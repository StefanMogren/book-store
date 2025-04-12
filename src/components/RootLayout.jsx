import { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function RootLayout() {
	const [cartAmount, setCartAmount] = useState(0);
	const [allUsers, setAllUsers] = useState([]);
	const [userLogin, setUserLogin] = useState(true);

	console.log(allUsers);

	const {
		data: books,
		isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/books.json');

	if (isLoading) return <section className='page'>Loading...</section>;
	if (isError) return <section className='page'>Error!</section>;

	return (
		<>
			{books && (
				<Outlet
					context={{
						cartAmount,
						setCartAmount,
						books,
						isLoading,
						isError,
						allUsers,
						setAllUsers,
						userLogin,
						setUserLogin,
					}}
				/>
			)}
		</>
	);
}

export default RootLayout;
