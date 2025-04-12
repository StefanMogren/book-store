import Input from './Input';

function LoginForm({ setUserLogin, setLoginOrRegister, allUsers }) {
	// Loginkontrollen
	const checkLogin = (event) => {
		event.preventDefault();
		const formElements = event.target.elements;

		const loginUser = {
			username: formElements.username.value,
			password: formElements.password.value,
		};

		// Kontrollerar ifall loginuppgifterna matchar befintlig användare.
		allUsers.forEach((user) => {
			if (
				user.username === loginUser.username &&
				user.password === loginUser.password
			) {
				console.log(`User ${user.username} logs in!`);
				setUserLogin(user.username);
			}
		});
	};

	// Vad som returneras
	return (
		<>
			<h1 className='login__title'>Login</h1>
			<form
				className='login__form'
				onSubmit={(event) => checkLogin(event)}>
				<Input
					inputType='text'
					inputName='username'
					inputId='username'
					// inputValue=
					inputClass='login__input'
					inputRequired='required'
					labelClass='login__label'
					labelText='Username'
					spanClass='login__label-text'
				/>
				<Input
					inputType='password'
					inputName='password'
					inputId='password'
					// inputValue=
					inputClass='login__input'
					inputRequired='required'
					labelClass='login__label'
					labelText='Password'
					spanClass='login__label-text'
				/>
				<button className='login__button'>Login</button>
				<p
					className='login__change-form'
					onClick={() => setLoginOrRegister(false)}>
					Don't have an account? Sign up
				</p>
			</form>
		</>
	);
}
export default LoginForm;
