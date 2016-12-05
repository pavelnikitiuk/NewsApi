import app from './applicationService';

export function routesFactory() {
    return new Set([
        {
            path: '#sources',
            controller: (callback) => require.ensure (
                ['./../components/Sources/Sources'],
                (require) => callback(require('./../components/Sources/Sources').default),
                '1'),
        },
        {
            path: /#articles\/.+/,
            controller: (callback) => require.ensure (
                ['./../components/Articles/Articles'],
                (require) => callback(require('./../components/Articles/Articles').default),
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
