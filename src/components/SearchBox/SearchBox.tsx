import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import meliLogo from '../../assets/images/logo-small.png';
import './SearchBox.scss';

export default function SearchBox(props: any) {
	const { onSearch } = props;
	const [search, setSearch] = useState('');
	let navigate = useNavigate();

	const searcher = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearch(e.target.value);

	const handleSubmittedForm = (
		e: React.ChangeEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		onSearch(search);
		navigate('/items', { replace: true });
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
					<Link to='/'>
						<img
							className='main-logo'
							src={meliLogo}
							alt='main-logo'
						/>
					</Link>
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
