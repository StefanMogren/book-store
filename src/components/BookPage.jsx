import { useFetch } from '../hooks/useFetch';
import BookItem from './BookItem';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';

function BookPage() {
	const [book, setBook] = useState(null);

	const {
		data: books,
		isLoading,
		isError,
	} = useFetch('https://santosnr6.github.io/Data/books.json');
	/* 
	if (isLoading) return <section className='page'>Loading...</section>;
	if (isError) return <section className='page'>Error!</section>;
 */
	const { id } = useParams();

	useEffect(() => {
		if (id && books) {
			const found = books.find((b) => b.id === parseInt(id));
			setBook(found);
		}
	}, [id, books]);

	console.log(id);
	console.log(book);

	return (
		<>
			<Header />
			{book && (
				<BookItem
					id={book.id}
					title={book.title}
					author={book.author}
					description={book.about}
				/>
			)}
		</>
	);
}
export default BookPage;
