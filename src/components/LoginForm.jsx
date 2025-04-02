import React from 'react';

function LoginForm() {
	return (
		<main className='login'>
			<h1 className='login__title'>Login</h1>
			<form className='login__form'>
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
