import { routesFactory, matchRoutes } from './routesProvider';

class navigationService {
    constructor(routes, rootSelector, basePath) {
        this._routes = routes;
        this._selector = rootSelector;
        this._hash = basePath;
    }

    initialize() {
        const href = location.hash;
        this.navigateTo(href);
         window.addEventListener('popstate', this._onStateChangedHandler.bind(this), false);
    }

    navigateTo(hash, updateState = true) {
        const controller = matchRoutes(this._routes,hash);
        if (controller) {
            this._controller = new controller();
            this._controller.render(this._selector);
        } else {
            this.navigateTo(this._hash);
        }
        if(updateState) {
            history.pushState({
                hash,
            }, null, hash);
        }
    }
    
    _onStateChangedHandler() {
        if (event && event.state) {
            this.navigateTo(event.state.hash, false);
        }
    }
}

export default new navigationService(routesFactory(), '.news-content', '#sources');