import React from 'react';

function RegisterForm() {
	const registerUser = (event) => {
		event.preventDefault();
		console.log('New user registered!');
	};

	return (
		<main className='login'>
			<h1 className='login__title'>Register</h1>
			<form
				className='login__form'
				onSubmit={(event) => registerUser(event)}>
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
					inputType='text'
					inputName='password'
					inputId='password'
					// inputValue=
					inputClass='login__input'
					inputRequired='required'
					labelClass='login__label'
					labelText='Password'
					spanClass='login__label-text'
				/>
				<button className='login__button'>Register</button>
				<p>Already have an account? Log in</p>
			</form>
		</main>
	);
}

export default RegisterForm;
