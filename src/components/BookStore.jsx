import Header from './Header';
// import { useState } from 'react';
import BookList from './BookList';
import { useOutletContext } from 'react-router-dom';
// import { useFetch } from '../hooks/useFetch';

function BookStore() {
	const { books } = useOutletContext();

	console.log(books);

	return (
		<>
			<BookList books={books} />
		</>
	);
}

export default BookStore;
