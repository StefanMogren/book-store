import BookItem from './BookItem';
// import books from '../data/books.json';

function BookList({ setCartAmount, books }) {
	const bookItems = () => {
		return books.map((book) => {
			return (
				<BookItem
					key={book.id}
					id={book.id}
					title={book.title}
					author={book.author}
					description={book.about}
					setCartAmount={setCartAmount}
				/>
			);
		});
	};

	return (
		<main>
			<ul className='main__book-list'>{bookItems()}</ul>
		</main>
	);
}

export default BookList;
