import BookItem from './BookItem';
import { useParams, useOutletContext } from 'react-router-dom';
import Header from './Header';

function BookPage() {
	const { books } = useOutletContext();

	const { id } = useParams();

	const book = books.find((b) => b.id === parseInt(id));

	return (
		<>
			<Header />
			<BookItem
				id={book.id}
				title={book.title}
				author={book.author}
				description={book.about}
			/>
		</>
	);
}
export default BookPage;
