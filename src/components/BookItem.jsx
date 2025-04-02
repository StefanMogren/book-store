function BookItem({ setCartAmount, title, author, description }) {
	const addToCart = () => {
		setCartAmount((prevState) => Number(prevState) + 1);
	};

	return (
		<li className='main__book-item'>
			<h2 className='main__book-title'>{title}</h2>
			<h3 className='main__book-author'>Av {author}</h3>
			<p className='main__book-description'>{description}</p>
			<button className='main__book-add-cart-button' onClick={addToCart}>
				Add to cart
			</button>
		</li>
	);
}

export default BookItem;
