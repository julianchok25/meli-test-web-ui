import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ProductCard from './components/ProductCard/ProductCard';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.scss';

function App() {
	const [text, setText] = useState('');

	const onSearch = (search: string) => setText(search);

	return (
		<div className='App'>
			<SearchBox onSearch={onSearch} />
			<Routes>
				<Route
					path='/items'
					element={<ProductCard item={text} />}
				></Route>
				<Route
					path='/items/:id'
					element={<ProductDetail />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
