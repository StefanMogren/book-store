import BookList from './BookList';

function Main({ setCartAmount }) {
	return (
		<main className='main'>
			<BookList setCartAmount={setCartAmount} />
		</main>
	);
}

export default Main;
