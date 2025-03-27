import BookItem from './BookItem';

function BookList() {
	return (
		<ul className='main__book-list'>
			<BookItem />
			<BookItem />
			<BookItem />
			<BookItem />
		</ul>
	);
}

export default BookList;
