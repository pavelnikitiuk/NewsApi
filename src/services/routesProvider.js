import News from './../components/News/NewsController';
import Sources from './../components/Sources/SourcesController';

export function routesFactory(){
    return new Map([
        ['#sources', Sources],
    ]);
}