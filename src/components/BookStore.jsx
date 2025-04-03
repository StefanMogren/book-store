import Header from './Header';
import Main from './Main';
import { useState } from 'react';

export default function BookStore({ setUserLogin }) {
	const [cartAmount, setCartAmount] = useState(0);

	return (
		<>
			<Header cartAmount={cartAmount} setUserLogin={setUserLogin} />
			<Main setCartAmount={setCartAmount} />
		</>
	);
}
