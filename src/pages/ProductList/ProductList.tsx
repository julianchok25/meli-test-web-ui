import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByQueryParam } from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import './ProductList.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductList(props: { item: string }) {
	const { item } = props;

	const [params, setParams] = useSearchParams();

	const arrItmes: Array<ItemModel> = [];
	const arrCategories: Array<string> = [];

	const [items, setItems] = useState(arrItmes);
	const [categories, setCategories] = useState(arrCategories);
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

	return (
		<div className='container'>
			<p className='breadcrumb'>{categories[0]}</p>
			{loading && <p>..Loading</p>}

			<div className='products-list'>
				<ProductCard items={items} />
			</div>
		</div>
	);
}
