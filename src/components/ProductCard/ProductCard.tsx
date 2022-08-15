import { FC, useEffect, useState } from 'react';
import getProductsByQueryParam from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import './ProductCard.scss';

export default function ProductCard() {
	const arrItmes: Array<ItemModel> = [];
	const arrCategories: Array<string> = [];
	const [items, setItems] = useState(arrItmes);
	const [categories, setCategories] = useState(arrCategories);

	useEffect(function () {
		getProductsByQueryParam('gafas').then((products) => {
			setCategories(products.categories);
			setItems(products.items.slice(0, 4));
		});
	}, []);

	return (
		<div className='products-list'>
			<p className='breadcrumb'>{categories[0]}</p>
			<section className='product-cards-container'>
				{items.map((product) => (
					<article
						key={product.id}
						className='product-card'
					>
						<img
							className='product-card__picture'
							src={product.picture}
							alt=''
						/>
						<div className='price-description'>
							<p>{`$ ${product.price.amount}`}</p>
							<p>{product.title}</p>
						</div>
					</article>
				))}
			</section>
		</div>
	);
}
