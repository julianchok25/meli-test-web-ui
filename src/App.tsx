import { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import './App.scss';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<SearchBox />
		</div>
	);
}

export default App;
