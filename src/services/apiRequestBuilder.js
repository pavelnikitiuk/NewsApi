export default class apiRequesBuilder {
	constructor({ method = 'GET', query = [], url = '', responseType = 'json', mode = 'cors' } = {}) {
		this._method = method;
		this._query = query;
		this._url = url;
		this._responseType = responseType;
		this._mode = mode;
	}

	addMethod(method) {
		this._method = method;
		return this;
	}

	addQuery(query) {
		this._query.push(query);
		return this;
	}

	addUrl(url) {
		this._url = url;
		return this;
	}

	addResponseType(responseType) {
		this._responseType = responseType;
		return this;
	}

	send() {
		const url = this._createUrl();
		const options = {
			method: this._method,
			mode: this._mode,
		};
		return fetch(url, options).then(this._transformResponseToType.bind(this));
	}

	_createUrl() { // TODO: add more methods suport
		if (this._method === 'GET') {
			const query = this._query.join('&');
			return `${this._url}?${query}`;
		}
		return '';
	}

	_transformResponseToType(response) {
		switch (this._responseType) {
			case 'arrayBudder':
				return response.arrayBuffer();
			case 'blob':
				return response.blob();
			case 'formData':
				return response.formData();
			case 'json':
				return response.json();
			case 'text':
				return response.text();
			default:
				return response.json();
		}
	}
}
