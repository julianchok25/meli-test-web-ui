import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import {
	Route,
	Routes,
	useSearchParams,
	useLocation,
} from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import './App.scss';

function App() {
	const [text, setText] = useState<string | any>('');
	const [categories, setCategories] = useState<Array<string>>([]);

	const [params] = useSearchParams();
	const location = useLocation();

	const onSearch = (search: string) => setText(search);
	const onCategories = (categories: Array<string>) => {
		setCategories(categories);
	};

	if (!text && location.pathname === '/items') {
		setText(params.get('search'));
	}

	return (
		<div className='App'>
			<SearchBox onSearch={onSearch} />
			<Routes>
				<Route
					path='/items'
					element={
						<ProductList
							item={text}
							onCategories={onCategories}
						/>
					}
				></Route>
				<Route
					path='/items/:id'
					element={
						<ProductDetail itemCategories={categories} />
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
