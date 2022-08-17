import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByQueryParam } from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import './ProductList.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductList(props: { item: string }) {
	const { item } = props;
	let categorySize = 0;

	const [params, setParams] = useSearchParams();

	const [items, setItems] = useState<Array<ItemModel>>([]);
	const [categories, setCategories] = useState<Array<string>>([]);
	const [loading, setLoading] = useState(false);

	useEffect(
		function () {
			setLoading(true);
			setParams({ search: item });

			getProductsByQueryParam(item).then((products) => {
				setCategories(products.categories);
				setItems(products.items.slice(0, 4));
				setLoading(false);
			});
		},
		[item]
	);
	categorySize = categories.length - 1;

	return (
		<div className='container'>
			<div className='breadcrumb'>
				{categories.map((category, index) => (
					<p className='breadcrumb__text' key={index}>
						{category}
						{categorySize !== index && <span>{'>'}</span>}
					</p>
				))}
			</div>

			{loading && <p>..Loading</p>}

			<div className='products-list'>
				<ProductCard items={items} />
			</div>
		</div>
	);
}
