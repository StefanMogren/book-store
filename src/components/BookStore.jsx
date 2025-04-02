import Header from './Header';
import Main from './Main';
import { useState } from 'react';

function BookStore() {
	const [cartAmount, setCartAmount] = useState(0);

	return (
		<>
			<Header cartAmount={cartAmount} />
			<Main setCartAmount={setCartAmount} />
		</>
	);
}

export default BookStore;
