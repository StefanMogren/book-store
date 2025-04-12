import Input from './Input';
import { useOutletContext } from 'react-router-dom';

function RegisterForm({ setLoginOrRegister }) {
	const { allUsers, setAllUsers } = useOutletContext();

	const registerUser = (event) => {
		event.preventDefault();
		const formElements = event.target.elements;

		const registerUser = {
			username: formElements.username.value,
			password: formElements.password.value,
		};

		console.log();

		if (registerUser.username.length <= 3) {
			console.log('Your username must be longer than three letters');
		} else if (registerUser.password.length <= 3) {
			console.log('Your password must be longer than three letters');
		} else if (
			allUsers.some((user) => user.username === registerUser.username)
		) {
			console.log(`User already exists!`);
		} else {
			setAllUsers([...allUsers, registerUser]);
			console.log('New user registered!');
		}
	};

	return (
		<>
			<h1 className='login__title'>Register</h1>
			<form
				className='login__form'
				onSubmit={(event) => registerUser(event)}>
				<Input
					inputType='text'
					inputName='username'
					inputId='username'
					// inputValue
					inputClass='login__input'
					inputRequired='required'
					labelClass='login__label'
					labelText='Username'
					spanClass='login__label-text'
				/>
				<Input
					inputType='text'
					inputName='password'
					inputId='password'
					// inputValue
					inputClass='login__input'
					inputRequired='required'
					labelClass='login__label'
					labelText='Password'
					spanClass='login__label-text'
				/>
				<button className='login__button'>Register</button>
				<p
					className='login__change-form'
					onClick={() => setLoginOrRegister(true)}>
					Already have an account? Log in
				</p>
			</form>
		</>
	);
}

export default RegisterForm;
