import Header from './Header';
import Main from './Main';
import { useState } from 'react';

function BookStore({ userLogin, setUserLogin }) {
	const [cartAmount, setCartAmount] = useState(0);

	return (
		<>
			<Header
				cartAmount={cartAmount}
				userLogin={userLogin}
				setUserLogin={setUserLogin}
			/>
			<Main setCartAmount={setCartAmount} />
		</>
	);
}

export default BookStore;
