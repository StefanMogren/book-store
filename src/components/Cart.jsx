import { useOutletContext } from 'react-router-dom';

function Cart() {
	const { cartAmount } = useOutletContext();
	return (
		<button className='header__cart-button'>
			Cart
			<span className='header__cart-counter'>{cartAmount}</span>
		</button>
	);
}

export default Cart;
