import { useState } from 'react';

function Counter() {
	return (
		<section className='main__counter-container'>
			<button className='main__counter-btn'>-</button>
			<p className='main__counter-count'>0</p>
			<button className='main__counter-btn'>+</button>
		</section>
	);
}

export default Counter;
