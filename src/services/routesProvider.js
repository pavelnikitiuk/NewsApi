import News from './../components/News/NewsController';
import Sources from './../components/Sources/SourcesController';

export function routesFactory() {
    return new Set([
        { path: '#sources', controller: Sources },
        {path: /#news\/.+/, controller: News},
    ]);
}

export function matchRoutes(routes, route) {
    for (const {path, controller} of routes) {
        if (route.match(path)) {
            return controller;
        }
    }
}