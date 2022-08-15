import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import ProductCard from './components/ProductCard/ProductCard';
import './App.scss';

function App() {
	const [text, setText] = useState('');

	const onSearch = (search: string) => {
		setText(search);
	};

	return (
		<div className='App'>
			<SearchBox onSearch={onSearch} />
			<ProductCard item={text} />
		</div>
	);
}

export default App;
