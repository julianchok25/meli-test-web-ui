import {
	ProductsRsModel,
	ProductRsModel,
} from '../models/product.model';

export async function getProductsByQueryParam(
	queryParam: string
): Promise<ProductsRsModel> {
	const apiUrl = `http://localhost:3000/api/items?q=${queryParam}`;

	return await fetch(apiUrl)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
}

export async function getProductById(
	productId: string | any
): Promise<ProductRsModel> {
	const apiUrl = `http://localhost:3000/api/items/${productId}`;
	console.log(apiUrl);

	return await fetch(apiUrl)
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
}
