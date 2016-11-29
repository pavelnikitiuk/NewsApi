export function routesFactory() {
    return new Set([
        {
            path: '#sources',
            controller: (callback) => require.ensure (
                ['./../components/Sources/SourcesController'],
                (require) => callback(require('./../components/Sources/SourcesController')),
                '1'),
        },
        {
            path: /#news\/.+/,
            controller: (callback) => require.ensure (
                ['./../components/Articles/ArticlesController'],
                (require) => callback(require('./../components/Articles/ArticlesController')),
                '2'),
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
