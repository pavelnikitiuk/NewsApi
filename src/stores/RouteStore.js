import Store from './../utils/Store';
import { NAVIGATE_SOURCES, NAVIGATE_ARTICLES, ROUTE_NOT_FOUND, ROUTE_CHANGED } from './../constants/route';
import { routesFactory, findRoute } from './../services/routesProvider';
import { navigateToArticles, navigateToSources, routeNotFound } from './../actions/routeActions';

export default class RouteStore extends Store {
    constructor() {
        super();
        this.handlers = {
            [NAVIGATE_SOURCES]: 'navigateSources',
            [NAVIGATE_ARTICLES]: 'navigateArticles',
            [ROUTE_NOT_FOUND]: 'navigateSources',
            [ROUTE_CHANGED]: 'routeChanged',
        };
        this._routes = routesFactory();
        this._model = {
            hash: '',
        };
    }

    static get storeName() {
        return 'RouteStore';
    }

    routeChanged(hash) {
        let callback;
        callback = findRoute(this._routes, hash);
        if (!callback) {
            callback = findRoute(this._routes, '#sources');
        }
        callback((Controller) => {
            this._model = {
                Controller,
                hash: hash,
            }
            this.emitChange();
        });


    }

    navigateSources(controller) {
        this.routeChanged('#sources');
    }

    navigateArticles(hash) {
        this.routeChanged(`#articles/${hash}`);
    }

    get route() {
        return this._model;
    }
}
