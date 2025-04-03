import Cart from './Cart';
import Logo from './Logo';
import LogOut from './LogOut';

function Header({ cartAmount, setUserLogin }) {
	return (
		<header className='header'>
			<Logo />
			<LogOut setUserLogin={setUserLogin} />
			<Cart cartAmount={cartAmount} />
		</header>
	);
}

export default Header;
