import React, { useState } from 'react';
import './SearchBox.scss';
import meliLogo from '../../assets/images/logo-small.png';

export default function SearchBox() {
	const [search, setSearch] = useState('');

	const searcher = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target);
		setSearch(e.target.value);
	};

	return (
		<>
			<header>
				<form
					action='/items'
					id='form-inputs'
					className='header-container'
				>
					<img
						className='main-logo'
						src={meliLogo}
						alt='main-logo'
					/>
					<div className='main-input-container'>
						<input
							type='text'
							placeholder='Nunca dejes de buscar'
							onChange={searcher}
							value={search}
						/>
						<button
							type='submit'
							form='form-inputs'
							className='main-input-container__button'
						></button>
					</div>
				</form>
			</header>
		</>
	);
}
