import configuration from './../configuration';
import RequestBuilder from './apiRequestBuilder';
import { gotSources } from './../actions/sourcesActions';
import { gotArticles } from './../actions/articlesActions';

class apiService {
    constructor(apiPrefix, apiKey) {
        this._apiPrefix = apiPrefix;
        this._apiKey = apiKey;
    }

    getSources(category) {
        const request = new RequestBuilder()
            .addUrl(`${this._apiPrefix}sources`)
            .addQuery('language=en')
        if (category !== 'all') {
            request.addQuery(`category=${category}`);
        }
        request.send()
            .then((response) => gotSources(response));
    }

    getArticles(id) {
        return new RequestBuilder()
            .addUrl(`${this._apiPrefix}articles`)
            .addQuery(`apiKey=${this._apiKey}`)
            .addQuery(`source=${id}`)
            .send()
            .then((response) => gotArticles(response));;
    }
}

export default new apiService(configuration.baseUrl, configuration.apiKey);