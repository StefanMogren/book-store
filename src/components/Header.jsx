import Cart from './Cart';
import Logo from './Logo';
import { useOutletContext } from 'react-router-dom';
import LogOut from './LogOut';

function Header() {
	const { userLogin, setUserLogin } = useOutletContext();

	return (
		<header className='header'>
			<Logo />
			<LogOut userLogin={userLogin} setUserLogin={setUserLogin} />
			<Cart />
		</header>
	);
}

export default Header;
