import React from 'react';
import Input from './Input';

export default function RegisterForm({ setLoginOrRegister }) {
	const registerUser = (event) => {
		event.preventDefault();
		console.log('New user registered!');
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
