import Cart from './Cart';
import Logo from './Logo';
import LogOut from './LogOut';

function Header() {
	return (
		<header className='header'>
			<Logo />
			<LogOut />
			<Cart />
		</header>
	);
}

export default Header;
