import configuration from './../configuration';
import RequestBuilder from './apiRequestBuilder';

class apiService {
    constructor(apiPrefix, apiKey) {
        this._apiPrefix = apiPrefix;
        this._apiKey = apiKey;
    }

    getSources() {
        return new RequestBuilder()
            .addUrl(`${this._apiPrefix}sources`)
            .addQuery('language=en')
            .send();
    }

    getArticles(id) {
        return new RequestBuilder()
            .addUrl(`${this._apiPrefix}articles`)
            .addQuery(`apiKey=${this._apiKey}`)
            .addQuery(`source=${id}`)
            .send();
    }
}

export default new apiService(configuration.baseUrl, configuration.apiKey);