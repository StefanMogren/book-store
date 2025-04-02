import Cart from './Cart';
import Logo from './Logo';

function Header({ cartAmount }) {
	return (
		<header className='header'>
			<Logo />
			<Cart cartAmount={cartAmount} />
		</header>
	);
}

export default Header;
