import { ProductsRsModel, ItemModel } from '../models/product.model';

export default function getProductsByQueryParam(
	queryParam: string
): Promise<ProductsRsModel> {
	const apiUrl = `http://localhost:3000/api/items?q=${queryParam}`;

	return fetch(apiUrl)
		.then((res) => res.json())
		.then((response) => response)
		.catch((err) => {
			console.log(err);
		});
}
