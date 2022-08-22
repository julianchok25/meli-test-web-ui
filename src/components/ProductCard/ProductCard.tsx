import { Link } from 'react-router-dom';
import { conditionMap } from '../../assets/json/products';
import { ItemModel } from '../../models/product.model';
import './ProductCard.scss';

export default function ProductCard(props: {
	items: Array<ItemModel>;
}) {
	const { items } = props;
	const condition = conditionMap;

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
						<div className='price-content'>
							<div className='price-description'>
								<p>
									{`$ ${product.price.amount.toLocaleString(
										'es-AR'
									)}`}
									{index % 2 === 0 && (
										<span className='active'></span>
									)}
								</p>

								<p>{product.title}</p>
							</div>
							<p className='price-content__state'>
								{condition.get(product.condition)}
							</p>
						</div>
					</article>
				</Link>
			))}
		</section>
	);
}
