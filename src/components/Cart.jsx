export default function Cart({ cartAmount }) {
	return (
		<button className='header__cart-button'>
			Cart
			<span className='header__cart-counter'>{cartAmount}</span>
		</button>
	);
}
