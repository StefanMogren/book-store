import Cart from './Cart';
import Logo from './Logo';
import LogOut from './LogOut';

function Header({ cartAmount, userLogin, setUserLogin }) {
	return (
		<header className='header'>
			<Logo />
			<LogOut userLogin={userLogin} setUserLogin={setUserLogin} />
			<Cart cartAmount={cartAmount} />
		</header>
	);
}

export default Header;
