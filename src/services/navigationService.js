import { routesFactory, findRoute } from './routesProvider';
import app from './../services/applicationService';
import { routeNotFound, routeChanged } from './../actions/routeActions';

class navigationService {
    constructor(routes, rootSelector, basePath) {
        this._routes = routes;
        this._selector = rootSelector;
        this._hash = basePath;
    }

    initialize() {
        const hash = location.hash;
        window.addEventListener('popstate', this._onStateChangedHandler.bind(this), false);
        app.stores.RouteStore.addListener(this.updateRoute.bind(this));
        this._onStateChangedHandler({ state: { hash } });
    }

    updateRoute(routeStore) {
        const route = routeStore.route;
        this.navigateTo(route);
    }

    navigateTo(route, updateState = true) {
        const hash = route.hash;
        if (updateState) {
            history.pushState({
                hash,
            }, null, hash);
        }
        this._controller && this._controller.destructor();
        this._controller = new route.Controller(route.routePath);
        this._controller.render(this._selector);

    }

    _onStateChangedHandler(event) {
        if (event && event.state) {
            routeChanged(event.state.hash);
        }
    }
}

export default new navigationService(routesFactory(), '.news-content', '#sources');