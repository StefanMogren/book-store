import users from '../data/users';

function LoginForm({ setUserLogin }) {
	// Loginkontrollen
	const checkLogin = (event) => {
		event.preventDefault();
		const formElements = event.target.elements;

		const loginUser = {
			username: formElements.username.value,
			password: formElements.password.value,
		};

		// Kontrollerar ifall loginuppgifterna matchar befintlig användare.
		users.forEach((user) => {
			if (
				user.username === loginUser.username &&
				user.password === loginUser.password
			) {
				console.log(`User ${user.username} logs in!`);
				setUserLogin(user.username);
			}
		});

		console.log('I got submitted!');
	};

	// Vad som returneras
	return (
		<main className='login'>
			<h1 className='login__title'>Login</h1>
			<form
				className='login__form'
				onSubmit={(event) => checkLogin(event)}>
				<label className='login__label' htmlFor='username'>
					<span className='login__label-text'>Username</span>
					<input
						type='text'
						name='username'
						className='login__input'
						id='username'
					/>
				</label>
				<label className='login__label' htmlFor='password'>
					<span className='login__label-text'>Password</span>
					<input
						type='text'
						name='password'
						className='login__input'
						id='password'
					/>
				</label>
				<button className='login__button'>Login</button>
				<p>Don't have an account? Sign up</p>
			</form>
		</main>
	);
}

export default LoginForm;
