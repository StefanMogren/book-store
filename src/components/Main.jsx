import BookList from './BookList';

export default function Main({ setCartAmount }) {
	return (
		<main className='main'>
			<BookList setCartAmount={setCartAmount} />
		</main>
	);
}
