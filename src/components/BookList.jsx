import BookItem from './BookItem';
import books from '../data/books.json';

function BookList({ setCartAmount }) {
	return (
		<ul className='main__book-list'>
			{books.map((book, index) => {
				return (
					<BookItem
						key={index}
						title={book.title}
						author={book.author}
						description={book.desc}
						setCartAmount={setCartAmount}
					/>
				);
			})}
		</ul>
	);
}

export default BookList;
