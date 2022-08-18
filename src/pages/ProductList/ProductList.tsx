import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByQueryParam } from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import ProductCard from '../../components/ProductCard/ProductCard';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './ProductList.scss';

export default function ProductList(props: any) {
	const { item, onCategories } = props;

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
				onCategories(products.categories);

				setItems(products.items.slice(0, 4));
				setLoading(false);
			});
		},
		[item]
	);

	return (
		<div className='container'>
			<Breadcrumb categories={categories} isComplete={true} />

			{loading && <div className='spinner'></div>}

			<div className='products-list'>
				<ProductCard items={items} />
			</div>
		</div>
	);
}
