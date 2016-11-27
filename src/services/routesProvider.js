// import Articles from './../components/Articles/ArticlesController';
// import Sources from './../components/Sources/SourcesController';

export function routesFactory() {
    return new Set([
        { // TODO: create common part
            path: '#sources',
            controller: (callback) => require(['./../components/Sources/SourcesController'], (SourcesController) => callback(SourcesController.default)),
        },
        { path: /#news\/.+/, controller: (callback) => require(['./../components/Articles/ArticlesController'], (ArticlesController) => callback(ArticlesController.default)) },
    ]);
}

export function matchRoutes(routes, route) {
    for (const {path, controller} of routes) {
        if (route.match(path)) {
            return controller;
        }
    }
}
