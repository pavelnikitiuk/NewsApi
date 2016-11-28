// import Articles from './../components/Articles/ArticlesController';
// import Sources from './../components/Sources/SourcesController';

export function routesFactory() {
    return new Set([
        {
            path: '#sources',
            controller: (callback) => require(['./../components/Sources/SourcesController'], callback),
        },
        {
            path: /#news\/.+/,
            controller: (callback) => require(['./../components/Articles/ArticlesController'], callback),
        },
        {
            path: '#test',
            controller: (callback) => require(['./../components/Test/TestController'], callback),
        }
    ]);
}

export function matchRoutes(routes, route) {
    for (const {path, controller} of routes) {
        if (route.match(path)) {
            return controller;
        }
    }
}
