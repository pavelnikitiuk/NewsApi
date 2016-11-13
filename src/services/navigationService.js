import { routesFactory } from './routesProvider';

class navigationService {
    constructor(routes, rootSelector, basePath) {
        this._routes = routes;
        this._selector = rootSelector;
        this._hash = basePath;
    }

    initialize() {
        const href = location.hash;
        this.navigateTo(href);
    }

    navigateTo(hash, updateState = true) {
        const controller = this._routes.get(hash);
        if (controller) {
            this._controller = new controller();
            this._controller.render(this._selector);
        } else {
            this.navigateTo(this._hash);
        }
    }
}

export default new navigationService(routesFactory(), '.news-content', '#sources');