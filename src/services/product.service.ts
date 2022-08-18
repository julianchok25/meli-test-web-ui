import exchangeService from './http.service';
import {
	ProductsRsModel,
	ProductRsModel,
} from '../models/product.model';
import { API_PATH } from '../utils/servicesPaths';

export async function getProductsByQueryParam(
	queryParam: string
): Promise<ProductsRsModel> {
	const apiUrl = `${API_PATH.managerEndpoint}?q=${queryParam}`;

	return await exchangeService(apiUrl);
}

export async function getProductById(
	productId: string | any
): Promise<ProductRsModel> {
	const apiUrl = `${API_PATH.managerEndpoint}/${productId}`;

	return await exchangeService(apiUrl);
}
