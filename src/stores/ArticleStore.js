import Store from './../utils/Store';
import { GOT_ARTICLES, GET_ARTICLES } from './../constants/articles';
import { timeAgo } from './../utils/time';


export default class ArticlesStore extends Store {
    constructor() {
        super();
        this.handlers = {
            [GOT_ARTICLES]: 'gotArticels',
            [GET_ARTICLES]: 'getArticels',
        };
        this._model = {
            articles: [],
            isLoading: false,
        };
    }

    static get storeName() {
        return 'ArticlesStore';
    }

    gotArticels(response) {
        response.articles.forEach((article) => {
            article.timeAgo = timeAgo(new Date(article.publishedAt));
        });
        this._model.articles = response.articles;
        this._model.isLoading = false;
        return this.emitChange();
    }

    getArticels() {
        this._model.isLoading = true;
        return this.emitChange();
    }

    get articles() {
        return this._model;
    }

}
