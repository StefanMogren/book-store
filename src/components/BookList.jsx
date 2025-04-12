import BookItem from './BookItem';
// import books from '../data/books.json';
import { useOutletContext } from 'react-router-dom';

function BookList() {
	const { books } = useOutletContext();

	const bookItems = books.map((book) => {
		return (
			<BookItem
				key={book.id}
				id={book.id}
				title={book.title}
				author={book.author}
				description={book.about}
			/>
		);
	});

	return (
		<main>
			<ul className='main__book-list'>{bookItems}</ul>
		</main>
	);
}

export default BookList;
