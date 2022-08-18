import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/product.service';
import { ItemModel } from '../../models/product.model';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './ProductDetail.scss';

export default function ProductDetail(props: {
	itemCategories: Array<string>;
}) {
	const { itemCategories } = props;
	const { id } = useParams();

	const [item, setItem] = useState<ItemModel | any>({});
	const [loading, setLoading] = useState(false);

	const conditionMap = new Map([
		['new', 'Nuevo'],
		['used', 'Usado'],
	]);

	useEffect(
		function () {
			setLoading(true);
			getProductById(id).then(({ item }) => {
				setLoading(false);
				setItem(item);
			});
		},
		[id]
	);

	return (
		<div className='detail-container'>
			<Breadcrumb
				categories={itemCategories}
				isComplete={false}
			/>
			{loading && <div className='spinner'></div>}

			<section className='product-detail'>
				<article className='header'>
					<img
						className='header__image'
						src={item.picture}
						alt={item.title}
					/>
					<div className='title-price'>
						<p className='title-price__state-sold'>{`${conditionMap.get(
							item.condition
						)} ${item.soldQuantity} vendidos`}</p>
						<h2 className='title-price__title'>
							{item.title}
						</h2>
						<h1 className='title-price__price'>
							{item.price?.amount.toLocaleString(
								'es-AR'
							)}
						</h1>
						<button className='title-price__button'>
							Comprar
						</button>
					</div>
				</article>

				<article className='footer'>
					<h3 className='footer__title'>
						Descripción del producto
					</h3>
					<p className='footer__description'>
						{item.description}
					</p>
				</article>
			</section>
		</div>
	);
}
