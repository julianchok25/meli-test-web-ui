import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getProductsByQueryParam } from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import './ProductCard.scss';

export default function ProductCard(props: { item: string }) {
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
		<div className='products-list'>
			<p className='breadcrumb'>{categories[0]}</p>

			{loading && <p>..Loading</p>}

			<section className='product-cards-container'>
				{items.map((product, index) => (
					<Link
						to={`/items/${product.id}`}
						key={product.id}
						className='product-link'
					>
						<article className='product-card'>
							<img
								className='product-card__picture'
								src={product.picture}
								alt={`${categories[0]} picture number ${index}`}
							/>
							<div className='price-description'>
								<p>{`$ ${product.price.amount}`}</p>
								<p>{product.title}</p>
							</div>
						</article>
					</Link>
				))}
			</section>
		</div>
	);
}
