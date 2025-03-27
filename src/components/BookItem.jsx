function BookItem() {
	return (
		<li className='main__book-item'>
			<h2 className='main__book-title'>Title</h2>
			<h3 className='main__book-author'>Author</h3>
			<p className='main__book-description'>Description</p>
			<button className='main__book-add-cart-button'>Add to cart</button>
		</li>
	);
}

export default BookItem;
