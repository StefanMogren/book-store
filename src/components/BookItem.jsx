function BookItem(props) {
	return (
		<li className='main__book-item'>
			<h2 className='main__book-title'>{props.title}</h2>
			<h3 className='main__book-author'>{props.author}</h3>
			<p className='main__book-description'>{props.description}</p>
			<button className='main__book-add-cart-button'>Add to cart</button>
		</li>
	);
}

export default BookItem;
