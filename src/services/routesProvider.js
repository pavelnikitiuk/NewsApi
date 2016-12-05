import app from './applicationService';

export function routesFactory() {
    return new Set([
        {
            path: '#sources',
            controller: (callback) => require.ensure (
                ['./../components/Sources/SourcesController'],
                (require) => callback(require('./../components/Sources/SourcesController').default),
                '1'),
        },
        {
            path: /#articles\/.+/,
            controller: (callback) => require.ensure (
                ['./../components/Articles/ArticlesController'],
                (require) => callback(require('./../components/Articles/ArticlesController').default),
                '2'),
        },
    ]);
}

export function findRoute(routes, route) {
    for (const {path, controller} of routes) {
        if (route.match(path)) {
            return controller;
        }
    }
}
