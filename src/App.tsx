import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ProductCard from './components/ProductCard/ProductCard';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<SearchBox />
			<ProductCard />
		</div>
	);
}

export default App;
