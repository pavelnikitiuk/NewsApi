import Articles from './../components/Articles/ArticlesController';
import Sources from './../components/Sources/SourcesController';

export function routesFactory() {
    return new Set([
        { path: '#sources', controller: Sources },
        {path: /#news\/.+/, controller: Articles},
    ]);
}

export function matchRoutes(routes, route) {
    for (const {path, controller} of routes) {
        if (route.match(path)) {
            return controller;
        }
    }
}