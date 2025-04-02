import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import { useState } from 'react';

function App() {
	let activeUser = null;
	const [cartAmount, setCartAmount] = useState(0);

	if (activeUser === null) {
		return (
			<div className='app'>
				<LoginForm />;
			</div>
		);
	} else {
		return (
			<div className='app'>
				<Header cartAmount={cartAmount} />
				<Main setCartAmount={setCartAmount} />
			</div>
		);
	}
}

export default App;
