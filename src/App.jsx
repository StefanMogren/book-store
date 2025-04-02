import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {
	const [cartAmount, setCartAmount] = useState(0);

	return (
		<div className='app'>
			<Header cartAmount={cartAmount} />
			<Main setCartAmount={setCartAmount} />
		</div>
	);
}

export default App;
