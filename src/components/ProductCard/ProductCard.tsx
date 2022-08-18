import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByQueryParam } from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import './ProductCard.scss';

export default function ProductCard(props: {
	items: Array<ItemModel>;
}) {
	const { items } = props;

	return (
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
							alt={`picture number ${index}`}
						/>
						<div className='price-description'>
							<p>
								{`$ ${product.price.amount.toLocaleString(
									'es-AR'
								)}`}
								<span className='active'></span>
							</p>

							<p>{product.title}</p>
						</div>
					</article>
				</Link>
			))}
		</section>
	);
}
