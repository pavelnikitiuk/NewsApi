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
        const controllerFactory = matchRoutes(this._routes, hash);
        if (controllerFactory) {
            if (updateState) {
                history.pushState({
                    hash,
                }, null, hash);
            }
            controllerFactory((Controller) => {
                this._controller = new Controller();
                this._controller.render(this._selector);
            })
        } else {
            this.navigateTo(this._hash);
        }

    }

    _onStateChangedHandler(event) {
        if (event && event.state) {
            this.navigateTo(event.state.hash, false);
        }
    }
}

export default new navigationService(routesFactory(), '.news-content', '#sources');