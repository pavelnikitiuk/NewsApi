import configuration from './../configuration';
import RequestBuilder from './apiRequestBuilder';

class apiService {
    constructor(apiPrefix, apiKey) {
        this._apiPrefix = apiPrefix;
        this._apiLKey = apiKey;
    }

    getSources() {
        return new RequestBuilder()
            .addUrl(`${this._apiPrefix}sources`)
            .addQuery('language=en')
            .send();
    }
}

export default new apiService(configuration.baseUrl, configuration.apiKey);