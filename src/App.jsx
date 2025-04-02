import LoginForm from './components/LoginForm';
import BookStore from './components/BookStore';

function App() {
	let activeUser = null;

	return (
		<div className='app'>{activeUser ? <BookStore /> : <LoginForm />}</div>
	);
}

export default App;
