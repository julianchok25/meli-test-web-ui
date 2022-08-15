import React, { useState } from 'react';
import './SearchBox.scss';
import meliLogo from '../../assets/images/logo-small.png';

export default function SearchBox(props: any) {
	const { onSearch } = props;
	const [search, setSearch] = useState('');

	const searcher = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value);

	const handleSubmittedForm = (
		e: React.ChangeEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		onSearch(search);
	};

	return (
		<>
			<header>
				<form
					action='/items'
					id='form-inputs'
					className='header-container'
					onSubmit={handleSubmittedForm}
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
							name='search'
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
