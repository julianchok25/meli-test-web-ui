export default function exchangeService(
	url: string,
	method?: string,
	data?: any,
	headers?: any
): Promise<any> {
	const request: RequestInit = {
		method,
		body: JSON.stringify(data),
		headers,
	};

	return fetch(url, request)
		.then((res) => res.json())
		.catch((error) => Promise.reject(error));
}
