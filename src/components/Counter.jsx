import { useState } from 'react';

function Counter({ setCartAmount }) {
	const [bookAmount, setBookAmount] = useState(0);

	const addBook = () => {
		setBookAmount((prevState) => prevState + 1);
		setCartAmount((prevState) => prevState + 1);
	};

	const removeBook = () => {
		if (bookAmount > 0) {
			setBookAmount((prevState) => prevState - 1);
			setCartAmount((prevState) => prevState - 1);
		}
	};

	return (
		<section className='main__counter-container'>
			<button
				className='main__counter-btn'
				onClick={() => {
					removeBook();
				}}>
				-
			</button>
			<p className='main__counter-count'>{bookAmount}</p>
			<button
				className='main__counter-btn'
				onClick={() => {
					addBook();
				}}>
				+
			</button>
		</section>
	);
}

export default Counter;
