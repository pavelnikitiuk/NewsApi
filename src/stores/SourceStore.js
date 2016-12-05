import Store from './../utils/Store';
import { GOT_SOURCES, GET_SOURCES } from './../constants/sources';
import Source from './../components/Sources/Source/Source';

export default class SourceStore extends Store {
    constructor() {
        super();
        this.handlers = {
            [GOT_SOURCES]: 'gotSource',
            [GET_SOURCES]: 'getSources',
        };
        this._model = {
            sources: [],
            isLoading: false,
        };
    }

    static get storeName() {
        return 'SourceStore';
    }

    gotSource(response) {
        response.sources.map((sourceInfo) => {
            sourceInfo.source = new Source(sourceInfo);
        });
        this._model.sources = response.sources;
        this._model.isLoading = false;
        return this.emitChange();
    }

    getSources() {
        this._model.isLoading = true;
        return this.emitChange();
    }

    get sources() {
        return this._model;
    }

}
