import Counter from './Counter';
import { Link } from 'react-router-dom';

function BookItem({ id, title, author, description }) {
	return (
		<li className='main__book-item'>
			<Link to={'/book/' + id} className='link'>
				<h2 className='main__book-title'>{title}</h2>
				<h3 className='main__book-author'>Av {author}</h3>
				<p className='main__book-description'>{description}</p>
			</Link>
			<Counter />
		</li>
	);
}

export default BookItem;
