import { useState } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function RootLayout() {
	const [cartAmount, setCartAmount] = useState(0);

	const {
		data: books,
		isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/books.json');

	if (isLoading) return <section className='page'>Loading...</section>;
	if (isError) return <section className='page'>Error!</section>;

	return (
		<>
			<Header cartAmount={cartAmount} />
			{books && (
				<Outlet
					context={{
						cartAmount,
						setCartAmount,
						books,
						isLoading,
						isError,
					}}
				/>
			)}
		</>
	);
}

export default RootLayout;
