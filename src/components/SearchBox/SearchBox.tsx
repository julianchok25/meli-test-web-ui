import React from 'react';
import './SearchBox.scss';
import meliLogo from '../../assets/images/logo-small.png';

export default function SearchBox() {
	return (
		<>
			<header>
				<img
					className='main-logo'
					src={meliLogo}
					alt='main-logo'
				/>
				<div className='main-input-container'>
					<input
						type='text'
						placeholder='Nunca dejes de buscar'
					/>
					<button className='main-input-container__button'></button>
				</div>
			</header>
		</>
	);
}
